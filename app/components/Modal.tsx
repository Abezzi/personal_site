import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  alt: string;
  onNext?: () => void;
  onPrev?: () => void;
  showArrows?: boolean;
  currentIndex?: number;
  totalImages?: number;
}

export default function Modal({
  isOpen,
  onClose,
  imageSrc,
  alt,
  onNext,
  onPrev,
  showArrows = false,
  currentIndex = 0,
  totalImages = 1,
}: ModalProps) {
  if (!isOpen) return null;

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" && onNext) onNext();
    if (e.key === "ArrowLeft" && onPrev) onPrev();
    if (e.key === "Escape") onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      ref={(el) => el?.focus()}
    >
      <div
        className="relative max-w-7xl max-h-full w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imageSrc}
          alt={alt}
          className="mx-auto max-h-[90vh] max-w-full object-contain rounded-lg shadow-2xl"
        />

        {/* Image counter */}
        {showArrows && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 rounded-full text-sm font-medium">
            {currentIndex + 1} / {totalImages}
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300 focus:outline-none transition"
          aria-label="Close modal"
        >
          ×
        </button>

        {/* Previous button */}
        {showArrows && onPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 focus:outline-none transition bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        {/* Next button */}
        {showArrows && onNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 focus:outline-none transition bg-black bg-opacity-50 rounded-full p-2"
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}
