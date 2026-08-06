import React, { useRef } from 'react'
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import emailjs from '@emailjs/browser';


export const Contact = () => {
   const form = useRef();


    const contactInfo = [
      {
        id:1,
       icon: FaEnvelope,
        title:'Email',
        value: "arpita.vns77@gmail.com",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=arpita.vns77@gmail.com"
      },

      

      {
        id:3,
        icon:FaLinkedin,
        title:'LinkedIn',
        value: 'linked.com',
        link: 'https://www.linkedin.com/in/arpitapatel48'
      },

      {
        id:4,
        icon:FaMapMarkerAlt,
        title:'Location',
        value: 'Varansi, Uttar Pradesh, India',
        link: "https://maps.google.com/?q=Varanasi,Uttar+Pradesh"
      },

    ]
   
   

    const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4vrgn5j",
      "template_5ecy4m9",
      e.target,
      "oy1Yxomu5IYWLKRcG"
    )
    .then(
      () => {
        alert("Message Sent Successfully!");
        form.current.reset(); // Form clear ho jayega
      },
      (error) => {
        alert("Failed to send message");
        console.log(error);
      }
    );
};

  return (
    <section id="contact" className='py-20 bg-gray-900   '>
    <div className='container mx-auto px-4 max-w-6xl'>
      <div className='text-center mb-12'>
        <h2 className='text-3xl md:text-5xl font-extrabold text-amber-50 mb-2'> 
          Let`s Connect
        </h2>
        <div className='w-28 h-1 bg-primary mx-auto mt-2 rounded-2xl'></div>
      </div>
      <div className='grid md:grid-cols-2 gap-8'>
        <div>
          <p className='text-white mb-8 leading-relaxed'>
            Modern Contact section for a developer portfolio website,
             professional and clean design,  laptop with code on screen, email,and social media icons.</p>
                <div className='space-y-6'>
                  {contactInfo.map((info) =>{
                    const Icon = info.icon;
                    return(
                      <div key={info.id}
                      
                      className='flex items-center gap-4 group'>
                        <div className='w-10 h-10 rounded-full bg-primary/10 flex item-center justify-center group-hover:bg-primary/20 transition-colors'>
                        <Icon size={18} className='text-primary text-[#1cd8d2]'/>
                        </div>
                        <div>
                          <h4 className='text-white font-medium text-sm'>
                            {info.title}
                          </h4>
                          {info.link ? (
                            <a href={info.link}
                            target="_blank"
                            className='text-gray-400 text-sm hover:text-primary transition-colors'
                            target={info.title === 'Location' ? '_self' : '_blank'}
                            rel={info.title === 'Location' ? '': 'noopener noreferrer'}>
                                                    {info.value}
                                                    </a>
                          ) : (
                            <p className='text-gray-400 text-sm'>
                              {info.value}
                            </p>
                          
                          )}
                        </div>
                        </div>
                    );
                  })}

                </div>
        </div>

        <div className='bg-gray-800 rounded-lg p-6'>
          <form ref={form} onSubmit={sendEmail}>

             <div className='mb-4'>
  <label className='text-white block mb-2 text-sm font-medium'>
    Name
  </label>

  <input
    type="text"
    name="name"
    className='w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white'
    placeholder='Your Name'
    required
  />
</div>
            
            <div className='mb-4'>
              <label htmlFor="email"
              className='text-white block mb-2 text-sm font-medium'>
                Email
              </label>
              <input type="email"  name="email" id="email"
              className='w-full px-4 py-2 bg-gray-700 
              border border-gray-600 rounded-lg text-white 
              text-sm focus:outline-none
              focus:border-primary  transition-colors'
              placeholder='your@email.com'
              required/>
            </div>

           <div className='mb-6'>
              <label htmlFor="message"
              className='text-white block mb-2 text-sm font-medium'>
                Message
              </label>
              <input type="text"  name="message" id="message"
              className='w-full px-4 py-4 bg-gray-700 
              border border-gray-600 rounded-lg text-white 
              text-sm focus:outline-none
              focus:border-primary  transition-colors'
              placeholder='your message'
              row='4'
              required/>
            </div>    

            <button
  type='submit'
  className=' bg-[#1cd8d2] w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 hover:scale-[1.04]'
>
  Send Message
</button>

            
          </form>
        </div>
      </div>
    </div>
    </section>
  );
};

