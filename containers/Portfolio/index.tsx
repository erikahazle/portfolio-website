import { NavBar } from '../../components/NavBar'
import { Footer } from '../../components/Footer'
import { DescriptionSection } from './Sections/Description'
import { FlexiFITTSection } from './Sections/FlexiFITT'
import { UdeavourSection } from './Sections/Udeavour'

export const Portfolio = () => {
  return (
    <div className='bg-amber-50'>
      <div className='bg-amber-50 relative pt-10'>
        <div className='max-w-screen-lg mx-auto md:py-8 sm:py-4 absolute top-0 left-0 right-0 z-30'>
          <NavBar />
        </div>
      </div>
      <DescriptionSection />
      <FlexiFITTSection />
      <UdeavourSection />
      <Footer />
    </div>
  )
}
