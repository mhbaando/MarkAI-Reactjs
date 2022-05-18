import React from "react";
import { Heading } from "../index";
import "@/styles/partners.scss";
import images from "@/constants/index";
import { motion, AnimatePresence } from "framer-motion";
import ReactPlayer from "react-player/youtube";

const Partners: React.FC = () => {
  return (
    <section className="mk__parners">
      <Heading
        subheading="Let’s introduce with"
        heading="Your Writing Partner!"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas purus odio tempor rutrum..."
        position="partners"
      />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        whileInView={{ scale: [0.91, 1] }}
        className="mk__parners--vedio"
      >
        <img
          src={images.WrtingPartner}
          alt="Your Writing Partner"
          className="bacground"
        />
        <img
          src={images.PlayButton}
          alt="Play The Vedio"
          className="playbutton"
        />
      </motion.div>
    </section>
  );
};

export default Partners;
