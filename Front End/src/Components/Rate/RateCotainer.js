import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Paginition from '../utility/Paginition'
import RateItem from './RateItem'
import RatePoste from './RatePoste'

const RateCotainer = () => {
    return (
        <Container className='Rate'>
            <div className='d-flex flex-row align-items-center mb-5'>
                <h3> التقييمات </h3>
                {/* <img src='' alt='⭐' /> */}
                <h5 className='text-warning'> ⭐4.3  </h5>
                <p> (160 تقييم )</p>
            </div>
            <RatePoste />

            <RateItem />
            <RateItem />
            <RateItem />

            <Paginition />

        </Container>
    )
}

export default RateCotainer