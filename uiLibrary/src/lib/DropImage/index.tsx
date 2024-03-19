import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { v4 as uuidv4 } from 'uuid';

interface DropImageProps {
  preview?: boolean;
  imageUrls?: string[];
  setFiles: React.Dispatch<React.SetStateAction<File[]>>;
}

export const DropImage: React.FC<DropImageProps> = ({
  preview = true,
  setFiles,
  imageUrls,
}) => {
  const [previewFiles, setPreviewFiles] = useState<File[]>([]);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    accept: { 'image/png': ['.png'], 'image/jpeg': ['.jpg', '.jpeg'] },
    maxFiles: 10,
    maxSize: 5000000,
    onDrop: (dropFiles) => {
      const newFiles: File[] = [];

      setFiles(dropFiles);

      dropFiles.forEach((dropFile) => {
        Object.assign(dropFile, {
          preview: URL.createObjectURL(dropFile),
          uuid: uuidv4(),
        });
        newFiles.push(dropFile);

        setPreviewFiles(newFiles);
      });
    },
  });

  return (
    <section className="w-full">
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className="flex justify-between">
          <div className="w-full bg-gray-light rounded-lg">
            <div className="border-2 border-dashed border-gray-400 rounded-lg bg-gray-100">
              <div className="flex items-center flex-col p-16">
                <p className="font-normal text-sm text-gray-400 py-4">
                  圖片僅支援 png、jpg、jpeg
                </p>

                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700">
                  拖曳圖片至此
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      {preview && (
        <div className="flex pt-2 gap-2">
          {previewFiles?.length
            ? previewFiles.length > 0 &&
              previewFiles.map((item: any) => (
                <div key={item?.uuid}>
                  <img
                    className="w-24 h-24 object-cover"
                    src={item?.preview}
                    alt=""
                  />
                </div>
              ))
            : imageUrls &&
              imageUrls.length &&
              imageUrls.map((item: string) => (
                <div key={item}>
                  <img className="w-24 h-24 object-cover" src={item} alt="" />
                </div>
              ))}
        </div>
      )}
    </section>
  );
};
