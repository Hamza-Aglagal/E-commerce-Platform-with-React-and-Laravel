import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import produit from './../../images/phone.jpg'
import produit2 from './../../images/phone-2.jpg'
import produit3 from './../../images/phone-3.jpg'
import ProductText from './ProductText'

const ProductDetailes = () => {
  const images = [
    {
      original: produit,
    },
    {
      original: produit2,
    },
    {
      original: produit3,
    },
  ];
  return (
    <div>
      <Row className='py-5'>
        <Col lg="4">
          <ProductGallery images={images} />
        </Col>
        <Col lg="8">
          <ProductText />
        </Col>
      </Row>
    </div>
  )
}

export default ProductDetailes



