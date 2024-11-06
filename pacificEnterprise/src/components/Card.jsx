// Card.jsx
import React from "react";
import PropTypes from "prop-types";
import "../index.css";

// Define la función truncateDescription
const truncateDescription = (description) => {
  const words = description.split(" ");
  return words.length > 12 ? words.slice(0, 12).join(" ") + "..." : description;
};

export function Card({ image, title, price, description }) {
  return (
    <div className="bg-[#323035] text-white w-[450px] h-[200px] rounded-r-3xl rounded-l-[9rem] lg:mr-[4%] flex items-center flex-shrink-0">
      <div className="w-[50%] h-full flex justify-center items-center bg-white rounded-full overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={image}
          alt={title}
        />
      </div>
      <div className="w-[50%] mx-[5%] overflow-hidden flex flex-col justify-center">
        <h1 className="mb-1 text-[.8rem] lg:text-xl overflow-hidden">{title}</h1>
        <p className="mb-1 text-[.7rem] lg:text-lg overflow-hidden">₡{price}</p>
        <p className="text-[.5rem] lg:text-base overflow-hidden">{truncateDescription(description)}</p> 
      </div>
    </div>
  );
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
