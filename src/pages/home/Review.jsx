import React from 'react'
import '../../style/review.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const review='Our Valuable Customer Review'
 const review1='Kachchi in the rainy weather, and if that Kachchi belongs to Kachchi Bhai, then there is no question! The quality of their food was always good and this time was no exception, the quantity of rice was good and the muttons were quite soft and the sizes of the muttons were bigger than before.'

 const review3='Kachchi in the rainy weather, and if that Kachchi belongs to Kachchi Bhai, then there is no question! The quality of their food was always good and this time was no exception, the quantity of rice was good and the muttons were quite soft and the sizes of the muttons were bigger than before.'
 const review4='Kachchi in the rainy weather, and if that Kachchi belongs to Kachchi Bhai, then there is no question! The quality of their food was always good and this time was no exception, the quantity of rice was good and the muttons were quite soft and the sizes of the muttons were bigger than before.'
 const review5='Kachchi in the rainy weather, and if that Kachchi belongs to Kachchi Bhai, then there is no question! The quality of their food was always good and this time was no exception, the quantity of rice was good and the muttons were quite soft and the sizes of the muttons were bigger than before.'
 const review6='Kachchi in the rainy weather, and if that Kachchi belongs to Kachchi Bhai, then there is no question! The quality of their food was always good and this time was no exception, the quantity of rice was good and the muttons were quite soft and the sizes of the muttons were bigger than before.'

 
 





const Review = () => {
  return (
    <div className='review py-5'>
        <div className="customerreview  text-center ">
            <h1 className='py-4' >Our Valuable Customer Review</h1>
        </div>
       <div className="container">

        
       <Swiper className='py-5 w-60 swiper-card' data-aos="zoom-in">

        <SwiperSlide> {review1}</SwiperSlide>
        <SwiperSlide> {review3}</SwiperSlide>
        <SwiperSlide> {review4}</SwiperSlide>
        <SwiperSlide> {review5}</SwiperSlide>
        <SwiperSlide> {review6}</SwiperSlide>
 


      </Swiper>

       </div>

    </div>
  )
}

export default Review