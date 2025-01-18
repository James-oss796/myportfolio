import React, { useState } from 'react'

export default function Contacts() {
    const [formData, setFormData] = useState({email: "", message: ""});

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(formData),
            });
            const result = await response.json();
            alert(result.message);
        } catch(error){
            alert("Something went wrong. Please try again.");
        }
    };

  return (
    <section id='contact' data-aos='fade-up' data-aos-delay='400'>
    <div className='py-8 lg:py-16 mx-auto max-w-screen-md'>
        <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>Contact Me</h2>
        <form onSubmit={handleSubmit} action='#' className='space-y-8'>
            <div>
                <label for='email' className='block mb-2 text-xl font-medium text-white'>Email</label>
                <input 
                type='email' 
                name='email'
                value={formData.email}
                onChange={handleChange}
                id='email' 
                className='shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' 
                placeholder='name@exemple.com' required/>
            </div>
            <div className='sm:col-span-2'>
                <label for='message' className='block mb-2 text-xl font-medium text-white'>Message</label>
                <textarea 
                rows="6"
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange} 
                className='shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5' 
                placeholder='Leave a comment ...' required/>
            </div>
            <button type='submit' className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgba(255,165,0,0.7)] rounded-full text-lg transition-all delay-100 ease-linear'>
                Send Message
            </button>
        </form>
    </div>
</section>
  )
}
