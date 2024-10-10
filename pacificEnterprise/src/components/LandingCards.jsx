import '../index.css'; 

export function LandingCards({ image, title }) { 
    return (
        <div className='w-[200px] h-[230px] my-1 py-2 bg-white rounded-2xl font-poppins flex flex-col justify-between'>
            <div className='m-[10%] flex justify-center items-center h-[60%]'>
                <div className='w-full h-full flex justify-center items-center bg-white rounded-full overflow-hidden shadow-md'>
                    <img className='w-full h-full object-cover' src={image} alt={title} />
                </div>
            </div>
            <div>
                <h1 className='my-1 text-xl font-bold text-center text-black'>{title}</h1> 
            </div> 
        </div>
    );
}
