import React from "react";
import "./Heading.scss";
import { motion } from "framer-motion";

interface Props {
  heading: string;
  subheading: string;
  desc: string;
  position?: string;
}
const Heading: React.FC<Props> = ({ heading, subheading, desc, position }) => {
  return (
    <div className="mk__heading">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{ duration: 0.5, type: "spring", stiffness: 12 }}
        className="subheading"
      >
        {subheading}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 12,
        }}
        className="heading"
      >
        {heading}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 12,
        }}
        className="desc"
      >
        {desc}
      </motion.p>
    </div>
  );
};

export default Heading;
