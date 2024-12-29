import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ProductText = () => {
    return (
        <div>
            <Row className='product-description'>
                <h5 className='Titre'> الإلكترونيات  </h5>
                <div> Apple iPhone 14 Pro 128GB Space Black (Verizon) MPXT3LL/A - Best Buy</div>
                <div className='text-warning'> ⭐ 4.5 </div>
            </Row>
            <Row className='product-description'>
                <h5 className='Titre'> الماركة </h5>
                <h4> Sumsung </h4>
                <Col>
                    <span className='circle-color-product'>fffef</span>
                    <span className='circle-color-product'>fffef</span>
                    <span className='circle-color-product'>fffef</span>
                </Col>
            </Row>
            <Row className='product-description'>
                <h5 className='Titre'> المواصفات </h5>
                <p>
                    Like the iPhone 13 models, the iPhone 14 and iPhone 14 Plus include
                    Super Retina XDR OLED displays that support 1200 nits peak
                    brightness, a 2,000,000:1 contrast ratio, Dolby Vision, and True
                    Tone support for matching the white balance of the display to
                    the lighting in the room.
                </p>
            </Row>
            <Row className='product-description'>
                <Col>
                    <h3 className='text-success mx-4' style={{fontWeight:'900'}}> 1000$ </h3>
                    <button className='btn-cart bg-dark text-white'> أضف إلى العربة </button>
                </Col>
            </Row>

        </div>
    )
}

export default ProductText