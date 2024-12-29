import React, { useState } from 'react'
import { Carousel, Row } from 'react-bootstrap'
import img from '../../images/images.png'
import img1 from '../../images/promotion-slider.jpg'
import test from '../../images/Logo.png'


const Slider = () => {

  const [index, setindex] = useState(0)
  const HandSelect = (selectedIndex)=>{
    setindex(selectedIndex)
  }

  return (
    <Row>
      <Carousel activeIndex={index} onSelect={HandSelect}>
        <Carousel.Item className='bg-slid ' interval={2000}>
          <div className='d-flex justify-content-center align-items-center'>
            <img
              className="d-block w-35 img-slide"
              src={test}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item className='bg-slid' interval={2000}>
          <div className='d-flex justify-content-center align-items-center'>
            <img
              className="d-block w-35 img-slide"
              src={img}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

        <Carousel.Item className='bg-slid' interval={2000}>
          <div className='d-flex justify-content-center align-items-center'>
            <img
              className="d-block w-35 img-slide"
              src={img1}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </div>
        </Carousel.Item>

      </Carousel>
    </Row >
  )
}

export default Slider