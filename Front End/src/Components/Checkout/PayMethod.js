import React from 'react'
import { Col, Row } from 'react-bootstrap'

const PayMethod = () => {
    return (
        <div >
            <div className="admin-content-text pt-5">اختر طريقة الدفع</div>
            <div className="user-address-card px-3">
                <Row className="d-flex justify-content-between ">
                    <Col xs="12" className="my-4">
                        <input
                            name="group"
                            id="group1"
                            type="radio"
                            value="الدفع عن طريق الفيزا"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group1">
                            الدفع عن طريق البطاقه الائتمانية
                        </label>
                    </Col>
                </Row>

                <Row className="mt-1">
                    <Col xs="12" className="d-flex">
                        <input
                            name="group"
                            id="group2"
                            type="radio"
                            value="الدفع عند الاستلام"
                            className="mt-2"
                        />
                        <label className="mx-2" for="group2">
                            الدفع عند الاستلام
                        </label>
                    </Col>
                </Row>
            </div>

            <Row>
                <Col xs="12" className="d-flex justify-content-end">
                    <div className="pay-method-product-price d-inline   border">34000$</div>
                    <div className="pay-method-product-cart-add px-3 pt-1 d-inline me-2"> اتمام الشراء</div>
                </Col>
            </Row>
        </div>
    )
}

export default PayMethod