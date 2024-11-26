import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import useFetchEvents from '../hooks/useFetchEvents';
import flechaback from "../assets/img/backto.png";
import flechago from "../assets/img/goto.png";
import "./EventCarousel.css";
import Footer from './Footer';

export function EventCarousel() {
    const events = useFetchEvents('http://pacificenterprise-produccion.test/api/events');

    return (
        <div className='flex flex-col items-center'>
            <div>
                <h1 className='font-bold text-white text-4xl'>
                    Eventos
                </h1>
            </div>
            <div className='flex w-[90vw] my-6 mx-auto'>
                <div className="carousel-container">
                    {events.length > 0 && (
                        <Carousel
                            showArrows={true}
                            showThumbs={false}
                            showStatus={false}
                            infiniteLoop={true}
                            autoPlay={true}
                            interval={5000}
                            renderArrowPrev={(onClickHandler, hasPrev, label) =>
                                hasPrev && (
                                    <button type="button" onClick={onClickHandler} title={label} className="carousel-control prev">
                                        <img src={flechaback} alt="Previous" />
                                    </button>
                                )
                            }
                            renderArrowNext={(onClickHandler, hasNext, label) =>
                                hasNext && (
                                    <button type="button" onClick={onClickHandler} title={label} className="carousel-control next">
                                        <img src={flechago} alt="Next" />
                                    </button>
                                )
                            }
                        >
                            {events.map(event => (
                                <div key={event.id} className="carousel-item">
                                    <div className="shadow-md rounded-[2rem] overflow-hidden relative">
                                        <img
                                            src={event.image_path}
                                            alt={event.title}
                                            className="w-full h-[80vh] object-cover"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-end items-start p-6 bg-gradient-to-t from-black/70 to-transparent">
                                            <h1 className="text-white text-3xl font-bold mb-2">{event.title}</h1>
                                            <p className="text-white mb-4">Fecha del Evento: {event.event_date}</p>
                                            <p className="text-white">{event.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
