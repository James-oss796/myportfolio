import React from 'react'
import javascript from '../../assets/javascript.png'
import html from '../../assets/html.png'
import php from '../../assets/php.png'
import webdesign from '../../assets/web-design.png'
import laravel from '../../assets/laravel.png'
import react from '../../assets/react.png'




export default function Skills() {
  return (
     <section id='skills' className=' relative overflow-hidden flex flex-col text-white body-font'>
        <div className=' container flex flex-wrap px-5 py-24 mx-auto items-center'>
            <div 
            data-aos='fade-up'
             data-aos-delay='700'
            className='md:w-1/2 md:pr-12 md:border-r md:border-b-0 mb-10 md:mb-0 pd-10 border-b border-orange-400'>
                <h1 data-aos='fade-left' data-aos-delay='500' className='flex flex-col justify-center items-center  sm:text-4xl text-7xl font-extrabold title-font mb-6 text-white'>Skills</h1>
                <p data-aos='fade-right' data-aos-delay='500' className='leading-relaxed text-base'>
                    - DevOps Tools: Docker, Kubernetes, Jenkins, Git, Terraform, Ansible, Prometheus, Grafana
- Cloud Platforms: AWS (EC2, S3, Lambda), Azure, Google Cloud Platform
- Networking: TCP/IP, DNS, DHCP, VPN, Firewall Configuration, Routing Protocols (OSPF, BGP)
- Scripting & Programming: Bash, Python, YAML
- Monitoring & Logging: ELK Stack, Nagios, CloudWatch
- Operating Systems: Linux (Ubuntu, CentOS), Windows Server
                </p>
            </div>
            <div data-aos='fade-left' data-aos-delay='500' className='flex flex-col md:w-1/2 md:pl-12'>
            <nav className='flex flex-wrap list-none -mb-1'>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                <img src={javascript} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                <img src={html} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                <img src={php} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                <img src={webdesign} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                <img src={laravel} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>
                <li className='lg:w-1/3 mb-4 w-1/2'>
                <img src={react} alt="" className='rounded-full w-24 h-24 object-cover' />
                </li>
                </nav>
                </div>
        </div>
     </section>
  )
}
