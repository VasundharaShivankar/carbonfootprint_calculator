import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Features from '../../components/Features/Features'
import AdvertiseVdo from '../../components/AdvertiseVdo/AdvertiseVdo.js'
import Footer from '../../components/Footer/Footer.js'
// import Book2 from '../../components/Transport/Transport.js'
import Transport from '../../components/Book2/Transport.js'
import Statistics from '../../components/Statistics/Statistics.js'
import Carousel from '../../components/Carousel/Carousel.js'
import Globe from '../../components/Globe/Globe.js'
import HeroShop from '../../components/HeroTrain/HeroTrain.js'
import HeroECommerce from '../../components/HeroAero/HeroAero.js'
import Preloader from '../../components/Preloader/Preloader.js'
import ReviewComp from '../../components/ReviewComp/ReviewComp.js'

function Home() {
  return (
    <div className='mt-5'>
      <Navbar/>
      <Carousel/>
      <Transport/>
      <Preloader/>
      <HeroShop/>
      <HeroECommerce/>
      <Features/>
      <Globe/>
      <AdvertiseVdo/>
      <ReviewComp/>
      <Statistics/>
      <Footer/>
    </div>
  )
}

export default Home
