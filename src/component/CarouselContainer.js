import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css'
import image1 from './../assets/images/chapter.png'

const CarouselContainer = () => {
  return (
    <>
    <div>
      <Carousel interval={null} fade={false} id="container1" >
        <Carousel.Item >
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Page1</h3>
            <p>Page1.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Page2</h3>
            <p>Page2</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
    </>
  )
}

export default CarouselContainer;