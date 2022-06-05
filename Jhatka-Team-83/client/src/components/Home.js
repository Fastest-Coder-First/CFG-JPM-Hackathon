import React from 'react'
import './Home.css';
import { Container } from 'react-bootstrap';
import hi1 from './images/Home1.jpg';
import hi2 from './images/Home2.jpg';

function Home() {
  return (
    <>
    <Container fluid>
      <div className="backg6">
    <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start ">
              <h1 className="">
                Make Anonymous Donations for a Sustainable Cause.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et,
                quia quis? Ipsa officia ad deserunt voluptate quam, nisi odio
                officiis tempora 
              </p>
              <h3>Lorem ipsum, dolor sit</h3>
              <a rel="noopener noreferrer" className='btn btn-dark' href="https://rzp.io/l/2vQKlMPGX4" target="_blank" >Donate Now</a>
              
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosection-images">
              <img
                src={hi2}
                alt="heroimg"
                className="img-fluid"
              />
              <img
                src={hi1}
                alt="heroimg4"
                className="img-fluid main-hero-img2"
              />
            </div>
          </div>
        </section>
      </header>
      </div>
    </Container>
    </>
  )
}

export default Home
