import './App.css'
import "./index.css";

function AboutUs() {


    return (
      <>
        <div classname='bg-[#16161A] flex items-center justify-center'>
          <h1 className='text-4xl font-bold text-white text-center p-4 mb-14 mt-14'>About Us</h1>
          <div className='flex items-center justify-center gap-20 m-2'>
            <img src='./src/assets/img/Rectangleferri.png'  className='w-[591px] h-[656.25px]' alt="Ferri" />
              <p className='text-white text-lg max-w-sm leading-relaxed'>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.<br />
              Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, <br /> 
              <span className='block mt-10'> cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. </span> <br />
              No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la
              </p>
          </div>
          <div className='flex items-center justify-center gap-20 m-2'>
            <div className='flex-col m-2'>
              <div className='flex gap-4'>
          <h2 className='text-[#CDA0CB] block font-bold text-left  text-3xl max-w-sm'>Horarios </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#CDA0CB]">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
</div>
          <p className='text-white text-lg mt-4'> Lunes a Domingo 8:00 am a 10:pm </p>
          <div className='flex gap-4'>
          <h2 className='text-[#CDA0CB] font-bold text-left  text-3xl max-w-sm mt-8'>Horarios </h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-[#CDA0CB] mt-8">
  <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
</svg>
</div>
          <p className='text-white text-lg mt-4'> Dentro del ferry Naviera <br /> 
          Tambor IV </p>
          </div>
          <img src='./src/assets/img/barco.png' className='w-[591px] h-[656.25px]' alt="Ferri" />
          </div>
        </div>
      </>
    )
  }
  
  export default AboutUs