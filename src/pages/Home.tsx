// import logo from '../assets/Onola.png'
// import { useState } from 'react'
// import { Skeleton } from '../components/ui/skeleton'
import Hero from '@/custom-components/Hero'
import AboutComponent from '@/custom-components/AboutComponent'
import ThematicAreasContainer from '@/custom-components/ThematicAreasContainer'
// import { BlogSlider } from '@/custom-components/BlogSlider'
// import EventCardContainer from '@/custom-components/EventContainer'
// import Slider from '@/custom-components/BackgroundImageSlider'
import MissionVisionSlider from '@/custom-components/MissionVissionComponent'
import Capabilities from '@/custom-components/Capabilities'
import CoreValues from '@/custom-components/CoverValues'
import TheoryOfChange from '@/custom-components/TheoryOfChange'
// import ImpactSection from '@/custom-components/ImpactSection'
function Home() {
  // const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <>
      <div className='pb-20'>
        <Hero />
      </div>
      <div className='py-20'>
        <AboutComponent />
      </div>
      <div className='py-20'>
        <ThematicAreasContainer />
      </div>
      <div className='py-20'>
        <MissionVisionSlider />
      </div>
      {/* <div className='py-20'>
        <ImpactSection />
      </div> */}

      <div className='py-20'>
        <Capabilities page='home' />
      </div>

      <div className='py-20'>
        <CoreValues />
      </div>

      <div>
        <TheoryOfChange />
      </div>
      {/* <div className='py-20'>
        <BlogSlider />
      </div> */}
    </>
  )
}

export default Home
