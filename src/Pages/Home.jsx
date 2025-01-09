import React from 'react'
import Swiper from '../Components/MainSwiper'
import Service from '../Components/Service'
import ServiceSwiper from '../Components/ServiceSwiper'
import ServiceTypes from '../Components/ServiceTypes'
import Advantage from '../Components/Advantage'
import AdvantageSwiper from '../Components/AdvantageSwiper'
import Register from '../Components/Register'

export default function Home() {
  return (
    <>
      <Swiper />
      <Service />
      <ServiceSwiper/>
      <ServiceTypes />
      <Advantage/>
      <AdvantageSwiper/>
      <Register/>
    </>
  )
}
