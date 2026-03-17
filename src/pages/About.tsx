import AboutHero from '@/custom-components/AboutPageHero'
import Capabilities from '@/custom-components/Capabilities'
import CoreValues from '@/custom-components/CoverValues'
import TheoryOfChange from '@/custom-components/TheoryOfChange'

const About = () => {
  return (
    <div>
      <div>
        <AboutHero />
      </div>
      <div>
        <Capabilities />
      </div>
      <div>
        <CoreValues />
      </div>
      <div>
        <TheoryOfChange />
      </div>
    </div>
  )
}

export default About
