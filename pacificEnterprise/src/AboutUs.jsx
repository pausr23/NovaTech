import './App.css'
import "./index.css";
import Footer from './components/Footer.jsx';

function AboutUs() {
  return (
    <>
      <div className='bg-[#16161A] flex flex-col items-center p-4'>
        <h1 className='text-4xl font-bold text-white text-center p-4 mb-14 mt-14'>About Us</h1>
        
        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 m-2'>
          <img src='https://asset.cloudinary.com/dm3gkx8t2/106c21493d01ba7bf356c313f30e28c6' className='w-full max-w-sm lg:w-[591px] lg:h-[656.25px]' alt="Ferri" />
          <p className='text-white text-lg max-w-md leading-relaxed'>
          Welcome to Pacific Enterprise, a unique fast-food restaurant located at the heart of your ferry journey. We're here to make every trip a delicious and memorable experience. Our commitment is to provide our passengers with fresh, quick, and quality food, perfect for satisfying your appetite while you enjoy the sea view.
          At Pacific Enterprise, we understand the importance of every moment during your trip. That’s why we’ve crafted a diverse and tasty menu with options for everyone, from our iconic burgers and fries to healthy and refreshing choices. We take pride in using fresh, high-quality ingredients to ensure that every bite is bursting with flavor.
        </p>
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20 m-2 mt-6'>
          <div className='flex-col'>
            <div className='flex gap-4 items-center'>
              <h2 className='text-[#CDA0CB] font-bold text-3xl'>Horarios</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#CDA0CB]">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </div>
            <p className='text-white text-lg mt-4'>Lunes a Domingo 8:00 am a 10:pm</p>

            <div className='flex gap-4 items-center mt-8'>
              <h2 className='text-[#CDA0CB] font-bold text-3xl'>Ubicación</h2>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-[#CDA0CB]">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </div>
            <p className='text-white text-lg mt-4'>Dentro del ferry Naviera <br /> Tambor IV</p>
          </div>
          <img src='https://asset.cloudinary.com/dm3gkx8t2/7cb1f8c68495d9299e011332236e6eec' className='w-full max-w-sm lg:w-[591px] lg:h-[656.25px]' alt="Barco" />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutUs;
