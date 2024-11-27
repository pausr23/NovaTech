import React from "react";
import "../index.css";

export function Footer() {
    return (
        
        <div className='bg-[#323035] w-full h-auto py-10 mt-16'>
        <div className='flex justify-center p-6'>
            <img src="https://res.cloudinary.com/dm3gkx8t2/image/upload/v1730771362/logo_kdxrcq.svg" alt="logo" className="w-42 h-auto" />
        </div>

        <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-8 text-center'>
            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z" clipRule="evenodd" />
                </svg>
                <p className='text-white text-sm'>Ferry Naviera - Tambor IV</p>
            </div>

            <div className="flex gap-2 items-center">
                <a href="https://admin.pacificenterprise.org" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-white">
                    <path fillRule="evenodd" d="M10 2a6 6 0 1 1 0 12A6 6 0 0 1 10 2ZM10 0a8 8 0 1 0 0 16A8 8 0 0 0 10 0Zm0 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM10 8c-2.21 0-4 1.343-4 3v1h8v-1c0-1.657-1.79-3-4-3Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-white text-sm">Iniciar Sesión</p>
                </a>
            </div>

            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <p className='text-white text-sm'>+506 7297-2600</p>
            </div>

            <div className="flex gap-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
                <p className='text-white text-sm'>pacific.enterprise.srl@gmail.com</p>
            </div>
        </div>
    </div>

    );
}

export default Footer;
