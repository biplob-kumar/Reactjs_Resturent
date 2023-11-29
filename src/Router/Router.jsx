import React from 'react'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import {

  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

//  pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Service from "../pages/service/Service";
import Product from "../pages/Product/Product";
import Contact from "../pages/Contact/Contact";
import Bookin from "../pages/booking/Bookin";
import Offer from '../pages/offer/Offer';

const Router = () => {
  return (
    <div>

<BrowserRouter>
  
  <Navbar expand="lg" className="bg-dark text-white sticky-top">
        <Container>
          <Navbar.Brand href="#" className='text-white logo '>  Restu<span>Rant</span>  </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="mx-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className='text-white '  as={Link} to='/' >HOME</Nav.Link>
              <Nav.Link  className='text-white' as={Link} to='/menu' >MENU</Nav.Link>
              <Nav.Link  className='text-white' as={Link} to='/offer' >OFFER</Nav.Link>
              <Nav.Link  className='text-white' as={Link} to='/branch' > BRANCH</Nav.Link>
              <Nav.Link className='text-white'  as={Link} to='/Product' > PRODUCT</Nav.Link>
              <Nav.Link className='text-white'  as={Link} to='/contact' > CONTACT</Nav.Link>

  
  
  
            </Nav>
            <Form className="d-flex">

            <Nav.Link className='text-white '  as={Link} to='/booking' > <button className='button'> Log In</button> </Nav.Link>
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
      
  
      <div>
          <Routes> 
  
              <Route  path='/'  element={<Home/>} />
              <Route  path='/menu'  element={<About/>} />
              <Route  path='/offer'  element={<Offer/>} />
              <Route  path='/branch'  element={<Service/>} />
              <Route  path='/product'  element={<Product/>} />
              <Route  path='/contact'  element={<Contact/>} />
              <Route  path='/booking'  element={<Bookin/>} />
 
             
          </Routes>
      </div>
      </BrowserRouter>


    </div>
  )
}

export default Router