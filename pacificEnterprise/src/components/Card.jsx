import React from "react";

import "../index.css";

export function Card() {
  return (
    <>
      <div className=" bg-[#323035] text-white w-full rounded-r-3xl rounded-l-[9rem] mr-[4%] flex items-center">
        <div className="w-[50%]">
          <img
            className="w-full "
            src="./src/assets/img/gallopinto.svg"
            alt="Gallo Pinto"
          />
        </div>
        <div className="w-[40%] mx-[5%]">
          <h1 className="mb-3.5 text-3xl">Gallo Pinto</h1>
          <p className="mb-3.5 text-xl">$5.44</p>
          <p className='text-xs ' >Lorem Ipsum is simply <br /> dummy text of the printing <br /> and typesetting industry. <br />
           Lorem Ipsum has been the <br />
          industry's standard dummy
       </p>
        </div>
      </div>
    </>
  );
}

export default Card;
