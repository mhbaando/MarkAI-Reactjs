import React, { useContext, useEffect } from "react";
import "../../styles/mobileNav.scss";
import { MenuContext } from "../../context/menu.context";
import { AnimatePresence, motion } from "framer-motion";
import menus from "./menus";

const MobileNav: React.FC = () => {
  // nav contetx
  const { isOpen, setIsOpen } = useContext(MenuContext);
  // mobile nav varients
  const varients = {
    hidden: { opacity: 0, scale: 0 },
    show: {
      opacity: 1,
      scale: 1,
      transform: "inherit",
      transition: {
        duraion: 0.5,
        easing: "easeInOut",
        staraggerChildren: 0.2,
      },
    },
  };

  // when the mbile menu is open disable scrolling the page
  useEffect(() => {
    // grab the body
    const body = document.querySelector("body");
    //  isOpen if it's true disable all scrlooing by hiding overyflow elemtns
    isOpen
      ? body?.classList.add("overflow-hidden")
      : body?.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="mh__mobileNav"
          key="mobileNav"
          variants={varients}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          (
          <motion.ul>
            {menus.map((menu, index) => {
              return (
                <motion.a
                  href={menu.link}
                  key={index}
                  whileInView={{ opacity: [0, 1], y: [-50 * index, 0] }}
                  transition={{
                    duration: 0.5,
                    easings: "easeInOut",
                  }}
                >
                  <li>{menu.name}</li>
                </motion.a>
              );
            })}
          </motion.ul>
          <motion.div className="mh__mobileNav--btn">
            <motion.button
              whileInView={{ opacity: [0, 1], y: [-50, 0] }}
              transition={{
                duration: 0.5,
                easings: "easeInOut",
              }}
              className="btn btn-ghost"
            >
              Login
            </motion.button>
            <motion.button
              whileInView={{ opacity: [0, 1], y: [-70, 0] }}
              transition={{
                duration: 0.5,
                easings: "easeInOut",
              }}
              className="btn btn-border "
            >
              Register
            </motion.button>
          </motion.div>
          )
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
