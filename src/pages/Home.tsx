import React, { useState } from "react";
import {
  Nav,
  Hero,
  MobileNav,
  Features,
  Partners,
  Interface,
  WebAi,
  CTA,
  Testimonials,
} from "@/components/index";
import { MenuContext } from "@/context/menu.context";

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav>
        <MenuContext.Provider value={{ isOpen, setIsOpen }}>
          <Nav />
          <MobileNav />
        </MenuContext.Provider>
      </nav>
      <main>
        <Hero />
        <Features />
        <Partners />
        <Interface />
        <WebAi />
        <CTA />
        <Testimonials />
      </main>
    </>
  );
};

export default Home;
