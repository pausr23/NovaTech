import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import hero from '../assets/img/hero.png';
import '../index.css';
import Menu from '../Menu';

export function Nav() {
    return (
        <div className='flex ml-[2vw]'>

            <div className='flex flex-col mt-[4vh] lg:mt-[2vw]   w-[45vw] h-[80vh]'>

                <div className='flex h-[4vh] lg:h-[4.167vw]  justify-between' >
                    <div className='h-full'>
                        <img src={logo} alt="logo" className='h-full object-contain' />
                    </div>

                    <div className='hidden lg:flex'>
                        <ul className='flex flex-row font-bold gap-[.8vw] text-[clamp(0.55rem, 2vw, 1.313rem)] my-auto'>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about-us">About</Link></li>
                            <li><Link to="/events">Events</Link></li>
                        </ul>
                    </div>
                </div>

                <div className='mt-[3vw]'>
                    <ul className='flex-row flex gap-[1.5rem] text-[3.5vw] font-bold'>
                        <li className=''>Unique</li>
                        <li className=' text-[#CDA0CB]'>flavors </li>
                    </ul>
                    <ul className='flex-row flex gap-[1.5rem] text-[3.5vw] font-bold'>
                        <li>On</li>
                        <li>Every</li>
                        <li>Voyage</li>
                    </ul>
                    <button className=' my-[5vh] xxs:text-xl text-3xl bg-[#CDA0CB] py-[1vh] px-[5vw] rounded-[2vw]'><Link to="/menu">Menu</Link></button>
                </div>

            </div>
            <div className='hidden lg:flex w-[55vw] h-[70vh]'>
                <img className='object-fit' src={hero} alt="hero img barco" />
            </div>

        </div>




    )
}