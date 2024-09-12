import React from 'react';

import "../index.css";



export function Card() {
    return (
     <>
     <div className='relative bg-[#323035] text-white w-[34rem] h-72 rounded-r-3xl rounded-l-[9rem] p-8 flex items-center'>
       <img className='absolute left-[-3rem] ' src="./src/assets/img/gallopinto.svg" 
       alt="Gallo Pinto"
       />
     <div className='ml-64'>
       <h1 className='mb-3.5 text-3xl'>Gallo Pinto</h1>
       <p className='mb-3.5 text-2xl'>$5.44</p>
       <p className='text-base' >Lorem Ipsum is simply <br /> dummy text of the printing <br /> and typesetting industry. <br />
       Lorem Ipsum has been the <br />
       industry's standard dummy
       </p>
     </div> 
     </div>

     </>
    )
}

export default Card
