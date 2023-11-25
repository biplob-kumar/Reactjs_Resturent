import React, { useEffect, useState } from 'react'
import '../../style/branch.css'
import branchData from '../../All data/branchData'
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const branchmenu='Our Branch'
const Branch = () => {
    const [data, setdata] = useState([])

    useEffect(() => {
        setdata(branchData)
    }, [])
    
  return (
    <div className='branch py-5 mt-5'>
        <h1  className='text-center branch-menu py-5 '> {branchmenu} </h1>
       <div className="container branch-wraper">
          
             {
                data.map((item)=>(
                     <div key={item.id} className='branch-card'  data-aos="zoom-out-up" >
                          <img src= {item.img} alt="" />
                          <h4 className='text-center mt-4' > {item.title} </h4>
                          <div className=' text-center bracnh-link'>
                             <Link to='/' >  <p>  SEE <FaArrowRight /> </p> </Link>
                          </div>
                         </div>
                ))
             }
 
       </div>
    </div>
  )
}

export default Branch