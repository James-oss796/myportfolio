import React from 'react'
import Navbar from '../navbar/Navbar'
import hi from '../../assets/hi.png'
import CV from '../hero/CV.pdf'
import img from '../../assets/img.png'

export default function Hero() {
  return (

    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
         {/* <div className='md:h-screen h-screen md:w-full w-full right-0 bg-gradient-to-r
          from-orange-600 via-yellow-500 to-red-400 absolute rounded-e-3xl 
          transform rotate-12 -top-20 shadow-[0_0_40px_rgb(255,165,0,0.7)]'>
         </div> */}

        {/* <Navbar /> */}

        <section 
        data-aos='fade-up'
        data-aos-delay='250'
        data-aos-offset='200'
         className=' text-white body-font z-10'>
          <div className='bg-orange-500 w-0.5'></div>
            <div className=' container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0
                 items-center text-center relative'>
                         <img src={hi} data-aos='fade-left' data-aos-delay='600'
                          className='absolute top-[350px] left-44 md:top-[-30px] md:left-[450px] 
                          transform -translate-x-1/2 -translate-y-1/2 w-20 h-20' />
                        <h1 className='title-font sm:text-4xl text-4xl mb-4 font-bold text-white'>Hi! I'm <span className='text-orange-500 font-bold size-20'>JAMES</span></h1>
                            <p data-aos='fade-right' data-aos-delay='600' className='mb-8 leading-relaxed'>Hi, I’m James Brian Ndung'u, a passionate DevOps Engineer and Networking Specialist.
                              I design and maintain scalable, secure cloud infrastructure and enterprise networks using modern automation and monitoring tools. I love solving complex problems with clean, reliable solutions.

                            </p>
                            <div className='flex justify-center'>
                              <a href={CV} download> 
                                    <button data-aos='zoom-in' data-aos-delay='600' className='inline-flex text-white bg-orange-500 border-0 py-2 px-6
                                    focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,265,0,0.7)]
                                    rounded-full text-lg transition-all delay-100 ease-in'>
                                        Download CV
                                    </button>
                               </a>
                            </div>
                 </div>
                 <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'> 
                   <img src={img} alt="hero" data-aos='fade-left' data-aos-delay='600'  className='object-cover object-center rounded-full w-80 h-80'/>
                 </div>
             </div>

        </section>
    </div>
  )
}
