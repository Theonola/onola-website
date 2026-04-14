import AboutHero from '@/custom-components/AboutPageHero'
import Capabilities from '@/custom-components/Capabilities'
// import CoreValues from '@/custom-components/CoverValues'
import ThematicAreasContainer from '@/custom-components/ThematicAreasContainer'
import TheoryOfChange from '@/custom-components/TheoryOfChange'

const About = () => {
  return (
    <div className='flex flex-col'>
      <div className=''>
        <AboutHero />
      </div>
      <div className='py-20 mt-16'>
        <ThematicAreasContainer />
      </div>
      <div className='py-20'>
        <TheoryOfChange />
      </div>
      <div className='py-20'>
        <Capabilities page='home' />
      </div>
    </div>
  )
}

export default About
