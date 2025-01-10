import React from 'react'
import Navbar from '../components/Navbar'
import Dishes from '../components/Dishes'
import Cusine from '../components/Cusine'
import SignInButton from '../components/Auth/SignIn'
import OfferCrousel from '../components/OfferCrousel'

const Home = () => {
  return (
    <div>
      <Navbar/>
     <div className='pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-44'>
     <OfferCrousel/>
     <Dishes/>
     <Cusine/>
     </div>
      jhsjdhhskd
      
    </div>
  )
}

export default Home
