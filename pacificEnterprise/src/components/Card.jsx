import React from "react";
import "../index.css";

export function Card({ image, title, price, description }) {
  return (
    <div className="bg-[#323035] text-white w-[80vw] xl:w-full rounded-r-3xl rounded-l-[9rem] lg:mr-[4%] flex items-center flex-shrink-0">
      <div className="w-[50%] overflow-hidden">
        <img className="w-full" src={image} alt={title} />
      </div>
      <div className="w-[40%] mx-[5%] overflow-hidden">
        <h1 className="mb-3.5 text-[.8rem] lg:text-xl overflow-hidden">{title}</h1>
        <p className="mb-3.5 text-[.8rem] lg:text-xl overflow-hidden">${price}</p>
        <p className="text-[.5rem] lg:text-base overflow-hidden">{description}</p>
      </div>
    </div>
  );
}

export default Card;
