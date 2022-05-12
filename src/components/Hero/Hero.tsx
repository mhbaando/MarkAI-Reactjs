import React from "react";
import "../../styles/hero.scss";
import images from "../../constants";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <div className="mk__hero">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, type: "spring", stiffness: 12 }}
        className="subtitle "
      >
        Let Ai help your
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{ duration: 0.5, type: "spring", stiffness: 12 }}
        className="heading"
      >
        MARKETING TEAM
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, type: "spring", stiffness: 12 }}
        className="desc"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus
        odio tempor rutrum condimentum viverra ornare. Gravida tellus ut
        venenatis.
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], scale: [0.9, 1] }}
        transition={{ duration: 0.5, type: "spring", stiffness: 1 }}
        className="btn btn-border"
      >
        Let's go
        <img src={images.Arrow} alt="Arrow Image" />
      </motion.button>
      <img
        className="btn scroll-down"
        src={images.GoDown}
        alt="Scroll to bottom"
      />
    </div>
  );
};
export default Hero;
