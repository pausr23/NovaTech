import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import hero from '../assets/img/hero.png';
import '../index.css'; 

export function Nav() {
    return (
        <div>
        <div className='ml-[4%] grid grid-cols-2 h-full '>
            <div className='mt-[2%] grid  w-[35%] h-[20%] items-start '>
                <div className='h-[20%] grid grid-cols-2 my-2'>
                    <img src={logo} alt="logo" className='w-full ' />
                    <ul className='flex flex-row font-bold gap-[2vw] text-base xxs:text-[0.55rem] md:text-[0.813rem] ml-auto my-auto '>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/about-us">About us</Link></li> 
                        <li><Link to="/">Home</Link></li>
                    </ul>
                </div>

                <div className='mt-[15%]'>
                    <ul className='flex-row flex gap-[5%] xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-7xl  font-bold'>
                        <li className=''>Unique</li>
                        <li className=' text-[#CDA0CB]'>flavors </li>
                    </ul>

                    <ul className='flex-row flex gap-[5%] xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-7xl font-bold'>
                        <li>on</li>
                        <li>every</li>
                        <li>voyage</li>
                    </ul>

                    <button className=' my-[5vh] xxs:text-xl text-3xl bg-[#CDA0CB] py-[1vh] px-[5vw] rounded-[2vw]'>Menu</button>

                </div>

            </div>

                <img className='w-full xxs:hidden ' src={hero} alt="hero img barco" />
        </div>

       
    </div>

    )
}