import React, { useState, useRef, ChangeEvent } from 'react';
import ErrorContent from '../Modal/ErrorContent';
import Modal from '../Modal';
import BaseTemplate from './BaseTemplate';


interface CustomUploadProps {
  className?: string;
  children?: React.ReactNode;
  file?: File | null;
  setFile?: any;
  imageUrl?: string;
}

export const CustomUpload: React.FC<CustomUploadProps> = ({
  className,
  children,
  file,
  setFile,
  imageUrl,
}) => {
  const imageMimeType = /image\/(png|jpg|jpeg)/i;
  const DEFAULT_IMAGE_SIZE_LIMIT_IN_BYTES = 5120000; // 5000 KB

  const [modal, setModal] = useState<React.ReactNode | null>(null);

  const hiddenFileInput = useRef<HTMLInputElement | null>(null);

  const handleImageClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
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
        className={className ? [className].join(' ') : ''}
        type="button"
        onClick={handleImageClick}
      >
        {children || <BaseTemplate file={file} imageUrl={imageUrl} />}
        <input
          type="file"
          ref={hiddenFileInput}
          accept=".png, .jpg, .jpeg"
          onChange={handleImageChange}
          className="hidden"
        />
      </button>
      {modal && <Modal modal={modal} unsetModal={setModal} />}
    </>
  );
};

export default CustomUpload;
