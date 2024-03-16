import { useState, useRef, FC } from 'react';
import ErrorContent from '../Modal/ErrorContent';
import Modal from '../Modal';
import BaseTemplate from '../UploadImage/BaseTemplate';

interface CustomUploadProps {
  className?: string;
  children?: React.ReactNode;
  file: File | null;
  setFile: React.Dispatch<React.SetStateAction<File | null>>;
}

export const UploadImage: FC<CustomUploadProps> = ({
  className,
  children,
  file,
  setFile,
}) => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES = 5120000; // 5000 KB

  const [modal, setModal] = useState<React.ReactNode | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement>(null);

  const handleImageClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentFile = event.target.files?.[0];

    if (!currentFile) {
      setFile(null);
      return;
    }

    if (currentFile && !currentFile.type?.match(imageMimeType)) {
      setModal(
        <ErrorContent setModal={setModal} errmsg="圖片僅支援 png、jpg、jpeg!" />
      );
      return;
    }

    if (currentFile && currentFile.size > DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES) {
      setModal(
        <ErrorContent
          setModal={setModal}
          errmsg={
            <span>
              選擇的檔案大小：
              {String((currentFile.size / 1024 / 1024).toFixed(3))}
              {' MB'}
              <br />
              <hr />
              上限：
              {String(
                (DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES / 1024 / 1024).toFixed(3)
              )}
              {' MB'}
            </span>
          }
        />
      );
      return;
    }

    setFile(currentFile);
  };

  return (
    <>
      <button
        className={className ? `${className}` : ''}
        type="button"
        onClick={handleImageClick}
      >
        {children || <BaseTemplate file={file} />}
        <input
          type="file"
          ref={hiddenFileInput}
          accept=".png, .jpg, .jpeg"
          onChange={handleImageChange}
          className="hidden"
          id="uploadImage"
        />
      </button>
      {modal && <Modal modal={modal} unsetModal={setModal} />}
    </>
  );
};

export default UploadImage;
