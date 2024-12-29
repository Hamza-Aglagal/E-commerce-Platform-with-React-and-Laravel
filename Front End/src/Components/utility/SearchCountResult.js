import React from 'react'
import { Col } from 'react-bootstrap'
import UnopDropdown from 'unop-react-dropdown'

const SearchCountResult = ({ Count }) => {
    const handler = () => {

    }
    return (
        <Col className='d-flex flex-row justify-content-between py-4'>
            <h4> --- {Count} منتج متاح  --- </h4>
            <UnopDropdown
                onAppear={handler}
                onDisappearStart={handler}
                trigger={<h4> <i class='fas fa-poll'> الترتيب حسب </i> </h4>}
                delay={300}
                align="CENTER"
                hover
            >
                <ul className='subTitle-Search'>
                    <li > الأكثر مبيعا  </li>
                    <li> الأعلى تقييما </li>
                    <li> السعر من الأقل إلى الأعلى </li>
                    <li> السعر من الأعلى إلى الأقل </li>
                </ul>
            </UnopDropdown>
        </Col>
    )
}

export default SearchCountResult

{/* <p> الترتيب </p> */ }