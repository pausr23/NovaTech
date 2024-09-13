import React from 'react';
import flechaback from './assets/img/backto.png';
import flechago from './assets/img/goto.png';
import { LandingCards } from './components/LandingCards';


export function Landing() {
    return (
        <>
         <div className='absolute min-w-[92%] mx-[4%] bg-[#CDA0CB] min-h-[350px] bottom-0 mb-[2%] rounded-2xl'>
                    <div className='flex m-[2%] minh-full'>
                        <div className='w-[5%] flex items-center justify-center'>
                            <img src={flechaback} alt="flecha back" />
                        </div>

                        <div className='mx-[1%] grid grid-cols-5 gap-[2%] min-w-[90%] h-full'>
                            
                                <LandingCards />
                                <LandingCards />
                                <LandingCards />
                                <LandingCards />
                                <LandingCards />
                                                    
                            
                        </div>
                        <div className='w-[5%] flex items-center justify-center'>
                            <img src={flechago} alt="flecha go" />
                        </div>
                    </div>
                </div>
            

        </>

    )

}