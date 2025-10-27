import React from 'react'
import ButtonComponent from './ButtonComponent';
import onola from '../assets/Onola-hero.png'
import image from '../assets/health.jpg'
import Success from './Success';
const Hero = () => {
  //bg-amber-100 
  return (
    <section className="mt-40 flex flex-col h-[620px] md:h-screen justify-center items-center  md:bg-white  container">
      <div className='flex flex-row justify-between w-full '>
        <div className='w-1/2 flex flex-col max-w-md mt-20'>
        {/* <h1>The  <span className='text-[var(--primary-yellow)]'>Onola</span> Institute</h1> */}
          <h1 className=''> Bringing  <span className='text-[var(--primary-yellow)]'>Reforms</span> and <span className='text-[var(--primary-yellow)]'>Development</span>  across the Regions</h1>
          <p className='mt-4'>Founded by experienced leaders who have implemented reforms across Nigeria, we plan to work and provide solutions</p>
          <button className='bg-[var(--primary-yellow)] text-white mt-4 p-2 w-[130px]'>Get started</button>
        </div>
        <div className='flex relative h-[400px] flex-col max-w-[500px] w-xl justify-center items-center bg-[#F2F2F2]'>
<img src={onola} alt="" className='bg-cover absolute top-4 right-8 flex justify-center items-center h-full'/>
        </div>
      </div>
      <div className='mt-8 h-[2px] bg-[var(--primary-yellow)] w-full'></div>
      <Success/>
    </section>
  );
}

export default Hero