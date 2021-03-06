import React from "react";
import "@/styles/interface.scss";
import images from "@/constants";
import { motion } from "framer-motion";
const Interface: React.FC = () => {
  return (
    <section className="mk__interface">
      <div className="mk__interface--info">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ scale: [0, 1] }}
          className="line"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileInView={{ opacity: [0, 1], y: [-12, 0] }}
          className="text"
        >
          <p className="subheading">What Is</p>
          <h3>Custom Interface</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus.
          </p>
          <button className="btn btn-border">Learn More...</button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [12, 0] }}
        className="mk__interface--image"
      >
        <img src={images.Interface} alt="Custom Interface" />
      </motion.div>
    </section>
  );
};

export default Interface;
