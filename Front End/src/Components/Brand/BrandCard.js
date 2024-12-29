import React from 'react'
import { Card, Col } from 'react-bootstrap'

const BrandCard = ({img, title}) => {
    return (
        <Col
            xs={6}
            sm={6}
            md={2}
            lg={2}
            className=' mb-3 '
            style={{marginLeft:'30px'}}
        >
            <Card style={{ width: '13rem', height:'13rem' }} className="Card-Brand">
                <Card.Img  className='img-CArdBrand' variant="top" src={"http://127.0.0.1:8000/Brand/" + img} />
                <p  className='Title-cardBrand' style={{fontSize:'2rem', fontWeight:'bold'}}> {title} </p>
            </Card>
        </Col>
    )
}

export default BrandCard