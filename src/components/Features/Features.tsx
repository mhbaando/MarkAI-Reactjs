import React from "react";
import images from "../../constants";
import { motion } from "framer-motion";
import "../../styles/Features.scss";

const Features: React.FC = () => {
  return (
    <section className="mk__features">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [-20, 0] }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 12,
        }}
      >
        Explore the features!
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
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus
        odio tempor rutrum...
      </motion.p>

      {/* Features Statrts Here */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: [0, 1], y: [20, 0] }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 12,
        }}
        className="features"
      >
        <div className="feature ">
          <img src={images.FeatureWebBased} alt="Ai Based" />
          <h2>Create Ai Based Website</h2>
        </div>
        <div className="feature">
          <img src={images.FeatureSEO} alt="SEO Friendly" />
          <h2>Write SEO Friendly Contents</h2>
        </div>
        <div className="feature">
          <img src={images.FeatureMaintain} alt="Artificial Intelligence" />
          <h2>Maintain site with Artificial Intelligence</h2>
        </div>
        <div className="feature">
          <img src={images.FeatureAnlyze} alt="analyzing data" />
          <h2>Response customer with analyzing data</h2>
        </div>
        <div className="feature">
          <img src={images.FeatureAi} alt="interface with Ai" />
          <h2>Show custom interface with Ai</h2>
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
