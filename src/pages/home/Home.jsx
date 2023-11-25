import React from 'react'
import Banner from '../../components/Banner'
import Menu from './Menu'
import Branch from './Branch'
import DeleveryParter from './DeleveryParter'
import Review from './Review'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div>

      <Banner/>
      <Menu/>
      <Branch/>
      <DeleveryParter/>
      <Review/>
      <Footer/>
    </div>
  )
}

export default Home