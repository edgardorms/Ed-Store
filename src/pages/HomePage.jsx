import React from "react";
import banner from "../assets/banner-home.jpeg";

function HomePage() {
  return (
    <>
      <div className="h-[270px] md:h-[100px]"></div>
      <img src={banner} alt="Ofertas" className="max-w-full" />;
    </>
  );
}

export default HomePage;
