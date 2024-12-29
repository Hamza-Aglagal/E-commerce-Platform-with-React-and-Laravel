import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartCheckout from '../../Components/Cart/CartCheckout'
import CartItem from '../../Components/Cart/CartItem'

const CartPage = () => {

    const [ProductsCrat, setProductsCrat] = useState()

    const [TotalPrice, setTotalPrice] = useState()

    useEffect(() => {
        setProductsCrat(JSON.parse(localStorage.getItem('Cart')))
    }, [ProductsCrat])


    // get Price Total
    let totalPrice = 0;

    // if (ProductsCrat) {
    //     ProductsCrat.forEach((item) => {
    //         totalPrice += item.price;
    //     });
    // }




    return (
        <Container style={{ minHeight: '670px' }}>
            <Row className='my-5'>
                <div className='fw-bold fs-4'> عربة التسوق  </div>
            </Row>
            <Row className='mt-5 d-flex justify-content-center'>
                <Col lg='8'>

                    {
                        ProductsCrat &&
                        ProductsCrat.map(item => <CartItem
                            key={item.id}
                            Card={item}
                        />)
                    }

                </Col>
                <Col lg='4'>
                    <CartCheckout totalPrice={TotalPrice} />
                </Col>
            </Row>
        </Container>
    )
}

export default CartPage