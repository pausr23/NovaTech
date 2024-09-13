

import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import hero from '../assets/img/hero.png';
import flechaback from '../assets/img/backto.png';
import flechago from '../assets/img/goto.png';
import gallopinto from '../assets/img/gallopinto.svg';
export function Nav() {
    return (
        <>
            <div>
                <div className='ml-[4%] flex flex-row h-full '>
                    <div className='mt-[2%] flex flex-col w-[35%] h-[20%] items-start '>
                        <div className='h-[20%] flex flex-row'>
                            <img src={logo} alt="logo" />
                            <ul className=' gap- flex flex-row font-bold gap-[2vw] ml-auto my-auto '>
                                <li><Link to="/menu">Menu</Link></li>
                                <li><Link to="/about-us">About us</Link></li>
                                <li><Link to="/">Home</Link></li>
                            </ul>
                        </div>

                        <div className='mt-[15%]'>
                            <ul className='flex-row flex gap-[5%] text-7xl font-bold'>
                                <li className=''>Unique</li>
                                <li className=' text-[#CDA0CB]'>flavors </li>
                            </ul>

                            <ul className='flex-row flex gap-[5%] text-7xl font-bold'>
                                <li>on</li>
                                <li>every</li>
                                <li>voyage</li>
                            </ul>

                            <button className=' mt-[5vh] text-4xl bg-[#CDA0CB] py-[1vh] px-[5vw] rounded-[2vw]'>Menu</button>

                        </div>



                    </div>

                    <div className='w-[65%] object-cover'>
                        <img className='object-cover ' src={hero} alt="hero img barco" />
                    </div>



                </div>

               
            </div>
        </>
    )
}