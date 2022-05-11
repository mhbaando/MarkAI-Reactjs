import React from 'react';
import menus from './menus';
import images from '../../constants';
import '../../styles/nav.scss';
import { RiMenu3Fill } from 'react-icons/ri';

// function reading the menu links
export const menuLinks = () => {
  return menus.map((menu, index) => {
    return (
      <a href={menu.link} key={index}>
        <li>{menu.name}</li>
      </a>
    );
  });
};

const Nav: React.FC = () => {
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
        <RiMenu3Fill />
      </div>

      <div className="mk__nav--blueRadius"></div>
      <div className="mk__nav--redRadius"></div>
    </section>
  );
};

export default Nav;
