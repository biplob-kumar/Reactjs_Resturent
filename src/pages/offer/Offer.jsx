import React, { useEffect, useState } from 'react'

import discountCard from '../../All data/cardData'
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import '../../style/offer.css'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
const Offer = () => {

    const [card, setcard] = useState([])

    useEffect(() => {
        setcard(discountCard)
    }, [])


  return (
    <div  className='offer '  >
        <h1 className='text-center text-white font-weight-bold py-3'> Our Offer  </h1>
        <div className="container">   
           <div className="offer-card">
            {
               card.map((item)=>(
                <div className='card text-center'>
                        <img className='img-fluid' src= {item.img} alt="" />
                        <h4 className='mt-2' > <CiLocationOn /> {item.title}</h4>
                        <h6  className='mt-2'>  <Link  to='/'> {item.secunTitle}  <IoIosArrowForward /> </Link> </h6>
                        <p  className='mt-2'> {item.desc} </p>
                </div>
               ))
            }
           </div>

        </div>

     <div className='mt-4'>
     <Footer />
     </div>
  
    </div>
  )
}

export default Offer