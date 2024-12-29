import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Produit_Promo from '../../images/produit-1.png'

const DiscountSection = () => {
    return (
        <Container className='d-flex justify-content-center '>
            <Row className=' discoun_Section bg-dark'>
                <div>
                    <p>خصم يصل إلى نسبة 100%</p>
                    <img src={Produit_Promo} />
                </div>

            </Row>
        </Container>
    )
}

export default DiscountSection