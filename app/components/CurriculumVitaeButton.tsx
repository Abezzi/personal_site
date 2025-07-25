import { motion } from "framer-motion";

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export const CurriculumVitaeButton = () => {
  return (
    <button aria-label="View my CV">
      <a
        href="https://github.com/Abezzi/cv_alex/blob/main/alex-herrera-cv-esp.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <motion.svg
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
          className="w-6 h-6"
          whileHover="hover"
          variants={imageVariants}
          initial="initial"
        >
          <motion.text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="18"
            fontWeight="bold"
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2 }}
          >
            CV
          </motion.text>
        </motion.svg>
      </a>
    </button>
  );
};
