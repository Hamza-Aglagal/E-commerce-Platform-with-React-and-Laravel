import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const CategoryHeader = () => {
  return (
    <div className='cat-header'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-start py-4'>
                    <div className='cat-Header-item'> الكل </div>
                    <div className='cat-Header-item'> المنتجات </div>
                    <div className='cat-Header-item'> الإلكترونيات </div>
                    <div className='cat-Header-item'> الملابس </div>
                    <div className='cat-Header-item'> الأزياء </div>
                    <div className='cat-Header-item'> الأحدية </div>
                    <div className='cat-Header-item'> الرياضة </div>
                    <div className='cat-Header-item'> All </div>
                    <div className='cat-Header-item'> Products </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default CategoryHeader