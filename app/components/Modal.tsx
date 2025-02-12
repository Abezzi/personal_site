import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={handleClickOutside}
    >
      <div className="bg-white rounded shadow-lg">
        <img src={imageSrc} alt="Modal Content" className="rounded" />
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &#10005; {/* Close button */}
        </button>
      </div>
    </div>
  );
};

export default Modal;
