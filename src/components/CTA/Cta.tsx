import React from "react";
import { motion } from "framer-motion";
import "@/styles/cta.scss";

const CTA: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ scale: [0.91, 1] }}
      className="mk__cta"
    >
      <div>
        <h1>Increase your sales by analyzing your colleced data!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Blandit est
          ac nulla faucibus proin nisl augue. Vestibulum sem scelerisque
          suspendisse praesent pretium non. At mattis bibendum ut sed praesent.
          Nam at id elementum gravida.
        </p>
        <button className="btn btn-border">Learn More...</button>
      </div>
    </motion.section>
  );
};

export default CTA;
