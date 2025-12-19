import { useState } from "react";
import Modal from "./Modal";

interface ProjectCardProps {
  alt: string;
  content: string;
  date: string;
  header: string;
  imageSrcs: string[];
  repoLink?: string;
  tags: string[];
}

type tag = {
  text: string;
  color: string;
};

function ProjectCard({
  alt,
  content,
  date,
  header,
  imageSrcs,
  repoLink,
  tags,
}: ProjectCardProps) {
  const tagList = tags.map((item, index) => (
    <div key={index}>
      <button
        className={
          "font-semibold py-1 px-2 rounded-lg text-sm underline decoration-2 decoration-" +
          item +
          "-500"
        }
      >
        {item}
      </button>
    </div>
  ));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const MAX_LINES = 5;
  const shouldTruncate =
    content.split("\n").length > MAX_LINES || content.length > 500;

  const openModal = (index: number = 0) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const goNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageSrcs.length);
  };

  const goPrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageSrcs.length) % imageSrcs.length
    );
  };

  return (
    <div className="border rounded p-4 mb-2">
      {/* Header + GitHub link */}
      <h2 className="text-2xl font-bold">
        {header}
        <a
          className="text-slate-700 dark:text-slate-300"
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          &lt;Github&gt;
        </a>
      </h2>
      <p className="text-gray-500 mb-4">{date}</p>

      {/* Image thumbnail */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="margin autofill">
          <img
            src={imageSrcs[0]}
            alt={alt}
            className="rounded cursor-zoom-in object-cover w-full h-48 hover:opacity-90 transition"
            onClick={() => openModal(0)}
          />
        </div>
        {/* Content */}
        <div className="md:col-span-2">
          <div
            className={`text-base text-justify prose dark:prose-invert max-w-none ${
              !isExpanded && shouldTruncate ? "line-clamp-5" : ""
            }
      prose-headings:text-xl prose-headings:font-semibold prose-headings:mt-4 prose-headings:mb-2
      prose-p:my-2 prose-ul:my-2 prose-ol:my-2 prose-li:my-1
    `}
            dangerouslySetInnerHTML={{
              __html: isExpanded || !shouldTruncate ? content : content,
            }}
          />

          {/* Show more/show less logic*/}
          {shouldTruncate && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 text-gray-600 dark:text-gray-400 font-bold hover:underline focus:outline-none"
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-neutral-200 dark:bg-neutral-800"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={imageSrcs[currentImageIndex]}
        alt={`${alt} ${currentImageIndex + 1}`}
        onNext={imageSrcs.length > 1 ? goNext : undefined}
        onPrev={imageSrcs.length > 1 ? goPrev : undefined}
        showArrows={imageSrcs.length > 1}
        currentIndex={currentImageIndex}
        totalImages={imageSrcs.length}
      />
    </div>
  );
}

export default ProjectCard;
