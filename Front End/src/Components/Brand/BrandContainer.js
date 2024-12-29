import React from 'react'
import BrandCard from './BrandCard'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { ShowBrand } from '../../Redux/Actions/BrandAction'


const BrandContainer = () => {

    const Dispatch = useDispatch()

    useEffect(() => {
        Dispatch(ShowBrand())
    }, [])

    // get data Brand
    const Brands = useSelector(state => state.Brand.Brands)

    return (
        <Container className='mt-5'>
            <p className='mb-5 fs-2' > كل العلامات التجارية    </p>
            <Row className='d-flex justify-content-center'>

                {
                    Brands.map(item => <BrandCard
                        img={item.img}
                        title={item.name}
                    />)
                }

            </Row>

        </Container>
    )
}

export default BrandContainer