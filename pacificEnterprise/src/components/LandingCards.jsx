import gallopinto from '../assets/img/gallopinto.svg';
import '../index.css'; 

export function LandingCards() {
    return (
    
            <div className='w-full h-full my-1 py-2 bg-white rounded-2xl font-poppins'>
                <div className='m-[5%] flex justify-center h-[60%]'>
                    <img className='w-[50%]' src={gallopinto} alt="Gallopinto" />
                </div>
                <div className='h-[40%]'>
                    <h1 className='my-1 text-2xl  font-bold text-center text-black'>Gallopinto</h1>
                </div> 
            </div>
        
    );
}