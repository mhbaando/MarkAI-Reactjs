import React, { useContext } from "react";
import menus from "./menus";
import images from "../../constants";
import "../../styles/nav.scss";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";
import { MenuContext } from "../../context/menu.context";
import { AnimatePresence, motion } from "framer-motion";
// function reading the menu links
export const menuLinks = () => {
  return menus.map((menu, index) => {
    return (
      <a
        href={menu.link}
        key={index}
        // onClick={() => setIsOpen(false)}
      >
        <li>{menu.name}</li>
      </a>
    );
  });
};

const Nav: React.FC = () => {
  // menu icon context
  const { isOpen, setIsOpen } = useContext(MenuContext);
  // varients aniamtion fro the menu icons
  const varients = {
    hidden: { scale: 0 },
    show: {
      scale: 1,
      transition: {
        duartion: 0.8,
        easings: "easeInOut",
      },
    },
  };

  return (
    <section className="mk__nav">
      <div className="mk__nav--brand">
        <a href="/">
          <img src={images.Logo} alt="Markai Logo" />
        </a>
      </div>
      <div className="mk__nav--menus">
        <ul>{menuLinks()}</ul>
      </div>
      <div className="mk__nav--btns">
        <button className="btn btn-ghost">Login</button>
        <button className="btn btn-border">Register</button>

        {/* Mobile Menu Icons */}
        <AnimatePresence>
          {!isOpen ? (
            <motion.div
              key="menuOpen"
              variants={varients}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <RiMenu3Fill onClick={() => setIsOpen(true)} />
            </motion.div>
          ) : (
            <motion.div
              key="menuclose"
              variants={varients}
              initial="hidden"
              animate="show"
              exit="hidden"
            >
              <RiCloseFill onClick={() => setIsOpen(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Cirlcels with radial gradient on the each side  */}
      <div className="mk__nav--blueRadius"></div>
      <div className="mk__nav--redRadius"></div>
    </section>
  );
};

export default Nav;
