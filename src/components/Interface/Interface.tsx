import React from "react";
import "@/styles/interface.scss";
import images from "@/constants";

const Interface: React.FC = () => {
  return (
    <section className="mk__interface">
      <div className="mk__interface--info">
        <div className="line"></div>
        <div className="text">
          <p className="subheading">What Is</p>
          <h3>Custom Interface</h3>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae quam
            sit scelerisque enim in sed diam nec, blandit. Amet tellus massa sed
            iaculis. Mauris, curabitur scelerisque sagittis posuere mollis. In
            dolor neque et vitae lectus vulputate pellentesque luctus.
          </p>
          <button className="btn btn-border">Learn More...</button>
        </div>
      </div>
      <div className="mk__interface--image">
        <img src={images.Interface} alt="Custom Interface" />
      </div>
    </section>
  );
};

export default Interface;
