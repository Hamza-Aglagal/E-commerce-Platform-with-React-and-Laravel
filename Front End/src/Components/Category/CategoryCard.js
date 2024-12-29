import React from 'react'
import { Col, Row } from 'react-bootstrap'


const CategoryCard = ({ title, img }) => {
    return (
        <Col
            xs={6}
            sm={6}
            md={4}
            lg={2}
            className='d-flex justify-content-around mb-2 '
        >
            <div>
                <div className='Category-card'  >
                    <img src={"http://127.0.0.1:8000/Categories/" + img} alt='Photo' className='cat-card-img' />
                </div>
                <p className='cat-card-title'> {title} </p>
            </div>

        </Col>
    )
}

export default CategoryCard