import { NavBar } from '../../components/NavBar'

import { HeroSection } from './Sections/Hero';
import { USPSection } from './Sections/USP';
import { ProblemStatementSection } from './Sections/ProblemStatement';
import { HelloSection } from './Sections/Hello';

export const Home = () => {
  return (
    <div>
      <div className='bg-amber-50 relative'>
        <div className='max-w-screen-lg mx-auto md:py-8 sm:py-4 absolute top-0 left-0 right-0 z-30'>
          <NavBar />
        </div>
        <div className='absolute lg:max-w-3/4 md:w-1/2 w-5/6 h-full invisible md:visible bg-coral' />
        <HeroSection />
      </div>
      <USPSection />
      <ProblemStatementSection />
      <HelloSection />
    </div>
  )
}
