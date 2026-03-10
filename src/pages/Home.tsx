// import logo from '../assets/Onola.png'
// import { useState } from 'react'
// import { Skeleton } from '../components/ui/skeleton'
import Hero from '@/custom-components/Hero'
import AboutComponent from '@/custom-components/AboutComponent'
import ThematicAreasContainer from '@/custom-components/ThematicAreasContainer'
import { BlogSlider } from '@/custom-components/BlogSlider'
// import EventCardContainer from '@/custom-components/EventContainer'
// import Slider from '@/custom-components/BackgroundImageSlider'
import MissionVisionSlider from '@/custom-components/MissionVissionComponent'
import ImpactSection from '@/custom-components/ImpactSection'
function Home() {
  // const [imgLoaded, setImgLoaded] = useState(false)

  return (
    <>
      <div>
        <Hero />
      </div>
      <div>
        <AboutComponent />
      </div>
      <div className='py-12'>
        <ThematicAreasContainer />
      </div>
      <div className='py-12'>
        <MissionVisionSlider />
      </div>
      <div className='py-12'>
        <ImpactSection />
      </div>
      <div>
        <BlogSlider />
      </div>
    </>
  )
}

export default Home
