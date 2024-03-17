import React from 'react';

interface ModalContentProps {
  title?: string;
  setModal?: any;
  children: React.ReactNode;
  onClick?: any;
  notice?: boolean;
}

const ModalContent: React.FC<ModalContentProps> = ({
  title,
  setModal,
  children,
  onClick,
  notice = false,
}) => (
  <form>
    {title && (
      <div className="text-2xl text-gray-700 font-medium border-solid border-b border-gray-300 mb-4 p-4">
        {title}
      </div>
    )}

    {children && <div className="py-4 px-8">{children}</div>}

    <div className="flex items-center text-base p-4 px-8 justify-around">
      {notice ? (
        <button
          type="button"
          className="w-24 h-10 px-2 text-white bg-gray-600  rounded"
          onClick={setModal}
        >
          確定
        </button>
      ) : (
        <>
          <button
            type="button"
            className="w-24 h-10 px-2 text-white bg-gray-600  rounded"
            onClick={setModal}
          >
            取消
          </button>
          {onClick && (
            <button
              type="button"
              className="w-24 h-10 mx-3 text-white bg-gray-500 rounded"
              onClick={onClick}
            >
              送出
            </button>
          )}
        </>
      )}
    </div>
  </form>
);

export default ModalContent;
