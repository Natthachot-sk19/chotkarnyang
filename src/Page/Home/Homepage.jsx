
import Hero from '../../Components/Hero/Hero'
import Tophero from '../../Components/Hero/Tophero'
import Heroservice from '../../Components/Hero/Heroservice'
import Payment from '../../Components/Hero/Payment'

import HeroSeller from '../../Components/Hero/HeroSeller'


function Homepage() {
  return (
    <div className='w-full md:h-auto bg-white font-sans'>
          <Tophero />
          <Hero />
          <Heroservice />

          <HeroSeller />
          <Payment />
    </div>
  )
}

export default Homepage