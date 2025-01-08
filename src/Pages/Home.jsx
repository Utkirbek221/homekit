import React from 'react'
import Main from './Main'
import Swiper from '../Components/MainSwiper'
import Service from '../Components/Service'
import ServiceSwiper from '../Components/ServiceSwiper'

export default function Home() {
  return (
    <>
      <Swiper />
      <Service />
      <ServiceSwiper/>
      <Main />
    </>
  )
}
