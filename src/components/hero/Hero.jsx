import React from "react";
import BgImage from "../../assets/bg-image.svg";
import HeroTitle from "../../assets/hero-title.png";

const Hero = () => {
  return (
    <div
      className="w-full h-[900px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BgImage})`,
      }}
    >
      <div className="bg-white bg-opacity-70 p-12 rounded-lg shadow-lg text-center">
        <img src={HeroTitle} alt="Hero Title" className="mx-auto mb-6" />

        <p className="text-black text-lg md:text-xl mb-8">
          All handmade with natural soy wax, Candleaf is a companion for all
          your pleasure moments.
        </p>

        <button className="bg-[#004b23] text-white px-8 py-3 rounded-md text-lg hover:bg-[#38b000] transition-colors">
          Discover Our Collection
        </button>
      </div>
    </div>
  );
};

export default Hero;
