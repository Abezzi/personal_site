import React, { useState } from "react";
import Modal from "./Modal";

interface ProjectCardProps {
  alt: string;
  content: string;
  date: string;
  header: string;
  imageSrc: string;
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
  imageSrc,
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

  const handleImageClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="border rounded p-4 mb-2">
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

      <div className="grid md:grid-cols-3 gap-4">
        <div className="margin autofill">
          <img
            src={imageSrc}
            alt={alt}
            className="rounded mr-4"
            onClick={handleImageClick}
          />
        </div>
        <div
          className="col-span-2 text-base text-justify"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
      </div>
      <div className="flex flex-wrap-gap-2">{tagList}</div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={imageSrc} />
    </div>
  );
}

export default ProjectCard;
