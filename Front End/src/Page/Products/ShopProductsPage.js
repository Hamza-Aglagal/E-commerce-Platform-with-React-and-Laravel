import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import SearchCountResult from '../../Components/utility/SearchCountResult'
import SideFilter from '../../Components/utility/SideFilter'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import Paginition from '../../Components/utility/Paginition'



const ShopProductsPage = () => {
    return (
        <div style={{ minHeight: '670px' }}>
            <CategoryHeader />

            <Container>
                <SearchCountResult Count={500} />
                <Row>
                    <Col sm="2" xs="2" md="2">
                        <SideFilter />
                    </Col>
                    <Col sm="6numbernumber" xs="9" md="10">
                        <CardProductsContainer title="" pathText="" />
                    </Col>
                </Row>
                <Paginition/>
            </Container>
        </div>
    )
}

export default ShopProductsPage



