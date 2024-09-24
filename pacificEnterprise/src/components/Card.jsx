import React from "react";

import "../index.css";

export function Card({ image, title, price, description }) {
  return (
    <div className="bg-[#323035] text-white w-full rounded-r-3xl rounded-l-[9rem] mr-[4%] flex items-center">
      <div className="w-[50%]">
        <img className="w-full" src={image} alt={title} />
      </div>
      <div className="w-[40%] mx-[5%]">
        <h1 className="mb-3.5 text-xl">{title}</h1>
        <p className="mb-3.5 text-xl">${price}</p>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
}

export default Card;
