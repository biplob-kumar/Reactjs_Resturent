import React, { useEffect, useState } from 'react'
import MenuData from '../../All data/Menudata'

import '../../style/menu.css'
 const menu='Our special menu'
const Menu = () => {

    const [data,setData]=useState([])
    const [collection ,setCollection]=useState([])
  
    useEffect(()=>{
      setData(MenuData)
      setCollection([... new Set(MenuData.map((item)=> item.menu))])
   
    },[]) 
  
    const Menu_filter=(itemData)=>{
      const filterData=MenuData.filter((item)=>item.menu==itemData)
      setData(filterData);
    }
  

  return (
    <div className='Menu'  >
     <div className="container menu-container">
         <div className="header">
         <h1 className='text-center py-5 pb-5  ' > {menu} </h1>
         </div>

         <div className="menu-eraper">

     
         <ul className='d-flex nav py-4'  >
           
            {
              collection.map((item) => <li className='men ' > < button onClick={() => { Menu_filter(item) }} >{item}</button> </li>)
            }
          </ul>
         </div>

          <div className="menu-gallray m  "  >

          {
            data.map((item) =>
        
                <div className='card text-center' data-aos="zoom-in-down" >             
              <div key={item.id} className='gallary-item' data-aos="zoom-in-down" > 
              <img src={item.img} />
                <h5 className=' mt-3' > {item.title} </h5>
                <p> {item.price} </p>
              </div>
              </div>
            
              
            )
          }
   

          </div>
     </div>

    </div>
  )
}

export default Menu