import React from 'react'
import '../style/banner.css'
import { Link } from 'react-router-dom'

const banerTest = ' Traditional Glass In the '
const test='Best Taste'

const checkbtn='Check out our special menu'

const Banner = () => {
  return (
    <div className='banner' data-aos="zoom-in">
      <div className="container banner-wraper">
           <div className="banner-content">
            <h2 className='text-center' > {banerTest}  <h2 className='red' >{test}</h2>  </h2>
           </div>
           <div className="banner-manu">
                   <div className="banner-left mt-5">
                      <Link to='/' className='button' > {checkbtn} </Link>
                   </div>
                   <div className="right"></div>
           </div>
      </div>

   
    </div>
  )
}

export default Banner