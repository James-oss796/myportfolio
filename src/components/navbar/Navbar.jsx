import React from 'react';

export default function Navbar() {
  const listNavbar = [
    { name: 'Home', link: '#home' },
    { name: 'Skills', link: '#skills' },
    { name: 'Experience', link: '#experience' },
    { name: 'Languages', link: '#languages' },
    { name: 'Projects', link: '#projects' },
  ];
  
  return (
   <header data-aos='fade-up' className=' text-gray-600 body-font z-10  opacity-10'>
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <span className='ml-3 text-3xl font-bold text-white'>Portfolio <span className='text-orange-500 font-extrabold text-ellipsis'>.</span></span>
        </a>
        <nav className='md:ml-auto text-white text-base md:mr-auto flex flex-wrap items-center justify-center'>
            {
                listNavbar.map((item, index) => (
                    <a key={index} href={item.link} className='mr-5 hover:text-yellow-300 active:text-yellow-500'>{item.name}</a>
                ))
            }
        </nav>
         <button className='inline-flex items-center py-1 px-10 focus:outline-none text-base
          text-orange-500 mt-4 md:mt-0 bg-[#050e1f] border hover:border-none rounded-lg hover:bg-yellow-300 hover:text-[#050e1f] transition delay-75 ease-in-out'>
              <a href="#contact">Contact me</a>
         </button>
    </div>
   </header>
  );
}
