import React from "react";
import "@/styles/testimonial.scss";
import images from "@/constants";
import { motion } from "framer-motion";

const Testimonials: React.FC = () => {
  const varients = {
    hidden: { opacity: 0, y: -12 },
    show: { opacity: 1, y: 0 },
    InView: { scale: [0.91, 1] },
  };

  return (
    <section className="mk__testimonials">
      <h2>
        Our Cusomer's <br></br>Review
      </h2>
      {/* person -1 */}
      <div className="mk__testimonials--holder">
        <motion.div
          initial={varients.hidden}
          animate={varients.show}
          whileInView={varients.InView}
          className="mk__testimonial"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis
            tellus nec aliquam volutpat. Dui dictum tortor dapibus integer
            convallis ut facilisi leo semper. Tristique nisl risus tristique
            nunc quis id elit. Suspendisse felis, tellus in sollicitudin.
          </p>
          <div className="author">
            <img src={images.Person} alt="Saul Ramirez" />
            <div className="author-info">
              <h3>Saul Ramirez</h3>
              <p>CEO, Mirrorly</p>
            </div>
          </div>
        </motion.div>
        {/* person -2 */}
        <motion.div
          initial={varients.hidden}
          animate={varients.show}
          whileInView={varients.InView}
          className="mk__testimonial"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis
            tellus nec aliquam volutpat. Dui dictum tortor dapibus integer
            convallis ut facilisi leo semper. Tristique nisl risus tristique
            nunc quis id elit. Suspendisse felis, tellus in sollicitudin.
          </p>
          <div className="author">
            <img src={images.Person} alt="Saul Ramirez" />
            <div className="author-info">
              <h3>Isiah Walls</h3>
              <p>Marketing Lead, Zamora</p>
            </div>
          </div>
        </motion.div>

        {/* person -3 */}
        <motion.div
          initial={varients.hidden}
          animate={varients.show}
          whileInView={varients.InView}
          className="mk__testimonial"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis
            tellus nec aliquam volutpat. Dui dictum tortor dapibus integer
            convallis ut facilisi leo semper. Tristique nisl risus tristique
            nunc quis id elit. Suspendisse felis, tellus in sollicitudin.
          </p>
          <div className="author">
            <img src={images.Person} alt="Saul Ramirez" />
            <div className="author-info">
              <h3>Forest Barrera</h3>
              <p>Managing Director, Teri</p>
            </div>
          </div>
        </motion.div>
        {/* person -4 */}
        <motion.div
          initial={varients.hidden}
          animate={varients.show}
          whileInView={varients.InView}
          className="mk__testimonial"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis
            tellus nec aliquam volutpat. Dui dictum tortor dapibus integer
            convallis ut facilisi leo semper. Tristique nisl risus tristique
            nunc quis id elit. Suspendisse felis, tellus in sollicitudin.
          </p>
          <div className="author">
            <img src={images.Person} alt="Saul Ramirez" />
            <div className="author-info">
              <h3>Ruby Schwartz</h3>
              <p>Marketing Intern, Thornton</p>
            </div>
          </div>
        </motion.div>

        {/* person -5 */}
        <motion.div
          initial={varients.hidden}
          animate={varients.show}
          whileInView={varients.InView}
          className="mk__testimonial"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis
            tellus nec aliquam volutpat. Dui dictum tortor dapibus integer
            convallis ut facilisi leo semper. Tristique nisl risus tristique
            nunc quis id elit. Suspendisse felis, tellus in sollicitudin.
          </p>
          <div className="author">
            <img src={images.Person} alt="Saul Ramirez" />
            <div className="author-info">
              <h3>Isaias Martinez</h3>
              <p>Head of Marketing, Moore</p>
            </div>
          </div>
        </motion.div>
        {/* person -6 */}
        <motion.div
          initial={varients.hidden}
          animate={varients.show}
          whileInView={varients.InView}
          className="mk__testimonial"
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque, duis
            tellus nec aliquam volutpat. Dui dictum tortor dapibus integer
            convallis ut facilisi leo semper. Tristique nisl risus tristique
            nunc quis id elit. Suspendisse felis, tellus in sollicitudin.
          </p>
          <div className="author">
            <img src={images.Person} alt="Saul Ramirez" />
            <div className="author-info">
              <h3>Deidre Braun</h3>
              <p>CEO, Wilbert</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
