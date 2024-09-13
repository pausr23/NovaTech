import gallopinto from '../assets/img/gallopinto.svg';

export function LandingCards() {
    return (
        <>
            <div className='w-full h-full bg-white rounded-2xl font-poppins'>
                <div className='m-[5%] flex justify-center h-[60%]'>
                    <img className='w-full' src={gallopinto} alt="Gallopinto" />
                </div>
                <div className='h-[40%]'>
                    <h1 className='mt-[1vh] text-4xl font-bold text-center text-black'>Gallopinto</h1>
                </div>
            </div>
        </>
    );
}