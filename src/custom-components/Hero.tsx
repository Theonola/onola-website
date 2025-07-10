import React from 'react'
import ButtonComponent from './ButtonComponent';


const Hero = () => {
  //bg-amber-100 
  return (
    <section className="mt-12 flex flex-col h-[620px] md:h-screen justify-center items-center  md:bg-white">
      <div className="flex flex-col md:flex-row justify-center items-center w-full container h-full md:mt-16 mt-36  gap-12">
        <article className="flex-1 mb-8 md:mb-0 md:w-1/2 w-full  items-center h-[90%] order-2 md:order-1">
          {/* Add your hero text or call-to-action here */}
          <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-relaxed ">Solving Nigeria’s <br /> Most Urgent Challenges,<br /> Together</h1>
          <h2></h2>
          <p className="text-sm  text-gray-700 mb-6">Onola is a locally-rooted institute solving Nigeria’s urgent challenges with practical, community-driven solutions. Led by experienced practitioners, we bridge policy and impact in key sectors to create lasting change.</p>
          {/* Add buttons or links if needed */}
          <ButtonComponent href="/about" className="bg-[var(--primary-yellow)] text-white hover:bg-primary-dark px-6 py-3 rounded-lg w-[300px]">
            Learn More
          </ButtonComponent>
            
        </article>
        <div className="flex-1 flex justify-center items-center md:h-[90%] md:w-1/2 w-full order-1 md:order-2 h-full">
          <video
            src="https://res.cloudinary.com/dbm6niakh/video/upload/v1752161020/5407870_Coll_wavebreak_People_3840x2160_sziwwc.mp4"
            className="rounded-lg shadow-sm w-full h-60 md:h-full object-cover max-w-xl"
            controls
            autoPlay
            loop
            muted
            poster="/video-poster.jpg"
          >
            Sorry, your browser does not support embedded videos.
          </video>
        </div>
      </div>
    </section>
  );
}

export default Hero