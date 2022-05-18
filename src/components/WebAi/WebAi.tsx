import React from "react";
import "@/styles/webAi.scss";
import images from "@/constants";
import { motion } from "framer-motion";

const WebAi: React.FC = () => {
  return (
    <section className="mk__webAi">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [12, 0] }}
        className="mk__webAi--image"
      >
        <img src={images.webAi} alt="Custom webAi" />
      </motion.div>
      <div className="mk__webAi--info">
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
          <p className="subheading">You can maintain your</p>
          <h3>Website with Ai</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus.
          </p>
          <button className="btn btn-border">Learn More...</button>
        </motion.div>
      </div>
    </section>
  );
};

export default WebAi;
