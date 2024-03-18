import React, { useEffect, KeyboardEvent } from 'react';

interface ModalProps {
  modal: React.ReactElement;
  unsetModal?: () => void;
}

const Modal: React.FC<ModalProps> = ({ modal, unsetModal = () => {} }) => {
  const handleKeyUp = (e: any) => {
    if (
      e.key === 'Escape' &&
      !['INPUT', 'SELECT'].includes(
        (document.activeElement as HTMLElement)?.tagName
      )
    ) {
      unsetModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [unsetModal]);

  return (
    <div className="fixed top-0 left-0 h-screen z-[2000] transition-opacity duration-300 transition-opacity bg-[#000000b3] w-full">
      <div className="w-full h-full flex justify-center items-center p-6">
        <div className="bg-white rounded overflow-y-auto w-full m-auto max-w-[455px] rounded-xl">
          {modal}
        </div>
      </div>
    </div>
  );
};

export default Modal;
