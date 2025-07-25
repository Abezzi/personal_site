import { motion } from "framer-motion";

const imageVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.1 },
};

export const EmailButton = () => {
  return (
    <button aria-label="Send me an email">
      <a href="mailto:abezzi@outlook.cl" target="_blank" rel="noreferrer">
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
          <motion.path
            d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 18H4V8L12 13L20 8V18ZM12 11L4 6H20L12 11Z"
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.svg>
      </a>
    </button>
  );
};
