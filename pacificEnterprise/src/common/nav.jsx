import logo from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';
import hero from '../assets/img/hero.png';
import '../index.css';
import Menu from '../Menu';
import { useState } from 'react';
import logop from '../assets/img/logopequeno.png';



export function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className='h-[20%] flex md:hidden mt-[5vh] '>
                <img
                    src={logop}
                    alt="logo"
                    className='w-[15vw] cursor-pointer mx-auto'
                    onClick={toggleMenu}
                />
                <div
                    className={`absolute top-0 left-0 h-full w-[85%] bg-black z-[2] transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}
                >
                    <div className='flex justify-between items-center p-4'>
                        <img src={logo} alt="logo" className='w-[60%]' />
                        <button onClick={toggleMenu} className='text-white'>
                            <svg
                                className='w-6 h-6'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                                xmlns='http://www.w3.org/2000/svg'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        </button>
                    </div>
                    <ul className='flex flex-col font-bold gap-[2vw] text-lg xxs:text-[1rem] md:text-[1.25rem] ml-[2rem] my-auto z-[3]'>
                        <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                        <li><Link to="/menu" onClick={toggleMenu}>Menu</Link></li>
                        <li><Link to="/about-us" onClick={toggleMenu}>Informacion</Link></li>
                        <li><Link to="/events" onClick={toggleMenu}>Eventos</Link></li>
                    </ul>
                </div>
            </div>

            <div className='mt-[3vh] flex flex-col items-center mb-[10vh] md:hidden'>
                <ul className='flex flex-row gap-[5%] xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-7xl font-bold'>
                    <li>Sabores</li>
                    <li className='text-[#CDA0CB]'>unicos</li>
                </ul>

                <ul className='flex flex-row gap-[5%] xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-7xl font-bold'>
                    <li>en</li>
                    <li>cada</li>
                    <li>Viaje</li>
                </ul>

                {location.pathname !== '/menu' && (
                    <button className='my-[5vh] xxs:text-xl text-3xl bg-[#CDA0CB] py-[1vh] px-[5vw] rounded-[2vw]'>
                        <Link to="/menu">Menu</Link>
                    </button>
                )}
            </div>


            <div className='hidden ml-[4%] md:grid md:grid-cols-2'>
                <div className='mt-[2%] grid w-[35%] h-[20%] items-start '>
                <div className='h-[20%] grid grid-cols-2 my-2'>
                        <img src={logo} alt="logo" className='w-full ' />
                        <ul className='flex flex-row font-bold gap-[2vw] text-base xxs:text-[0.55rem] md:text-[0.813rem] ml-auto my-auto '>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/about-us">Informacion</Link></li>
                        </ul>
                    </div>

                    <div className='mt-[15%]'>
                        <ul className='flex-row flex gap-[5%] xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-7xl  font-bold'>
                            <li className=''>Sabores</li>
                            <li className=' text-[#CDA0CB]'>unicos </li>
                        </ul>

                        <ul className='flex-row flex gap-[5%] xxs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-7xl font-bold'>
                            <li>en</li>
                            <li>cada</li>
                            <li>Viaje</li>
                        </ul>

                        <button className=' my-[5vh] xxs:text-xl text-3xl bg-[#CDA0CB] py-[1vh] px-[5vw] rounded-[2vw]'><Link to="/menu">Menu</Link></button>

                    </div>

                </div>
                <div className='flex w-full h-full  '>
                    <img className=' place-self-start xxs:hidden object-fit h-full ' src={hero} alt="hero img barco" />
                </div>
            </div>


        </div>

    )
}