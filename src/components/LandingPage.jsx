import React from 'react'
import { data } from './Data'
import Image1 from '../assets/spec (5).png'
import Image2 from '../assets/spec (4).png'
import Image3 from '../assets/spec (6).png'
import Image4 from '../assets/Group5.png'
import Image5 from '../assets/Rectangle 246.png'


const LandingPage = () => {
  return (
    <>
      <div className="container flex items-center h-screen p-6 mx-auto mt-6 space-y-0 justify-evenly md:space-y-0">
        <div className='flex flex-col px-6 py-6'>
          <h1 className='p-4 mt-6 text-5xl font-semibold text-white'>We are the <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>future</span><br /> of business intelligence</h1>
          <p className='p-4 text-[#BBBBBB] text-left max-w-2xl'>Octave-Melody-AI is a product that leverages data science and web application technologies to operationalize business data by building predictive web applications <br /> that tracks performance KPIs using interactive dashboards in real time.</p>
          <button className='text-[#ffffff] mt-6 bg-gradient-to-r from-[#E975A8] to-[#726CF8] w-fit px-3 py-3 ml-5 rounded'>Request Consultation</button>
        </div>

        <div className="relative cursor-grab">
          <img src={Image1} alt="" className='absolute top-0 -left-24' />
          <img src={Image2} alt="" width='320px' className='mt-12 mb-12' />
          <img src={Image3} alt="" className='absolute right-1 -bottom-35' />
        </div>
      </div>

      <section className='mt-6 p-6 h-screen bg-[#333333]'>
        <div className='w-full mt-8 font-semibold text-center text-md'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>YOUR BUSINESS, </span>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>OUR PROBLEM</span>
        </div>

        
        <h1 className=' font-medium text-center mt-2 max-w-screen text-2xl text-[#ffffff]'>BUILD PREDICTIVE WEB APPLICATIONS FOR YOUR BUSINESS</h1>
        <div className='flex justify-between mx-auto'>
          {data.map(({ id, image, info, name }) => {
            return (
               <div className ='flex flex-col items-center justify-center p-4 mt-20 ml-6 border border-fuchsia-800'>
                <div className='w-20 h-20 rounded-full bg-slate-200 portfolio_item-image '>
                  <img src={image} alt={name} />
                </div>
                <h3 className='p-3 text-white'>{name}</h3>
                <p className='text-left max-w-md text-[#BBBBBB] p-3'>{info}</p>
              </div>     
        )
        })}
          </div>

      </section>
      
      <div className='bg-[#282828] h-screen container flex p-6 mx-auto mt-8 items-center justify-evenly'>
        <img src={Image4} className='relative' alt="" />
        <img src={Image5} className='absolute top-4' alt="" />
          
        <div className='flex flex-col p-6'>
          <h1 className='bg-clip-text text-transparent bg-gradient-to-r from-[#E975A8] to-[#726CF8]'>DATA INSIGHTS</h1>
        </div>
      </div>
  </>
          
  )}

              
export default LandingPage