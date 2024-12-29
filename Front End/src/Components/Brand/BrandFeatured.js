import React from 'react'
import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ShowBrand } from '../../Redux/Actions/BrandAction'
import SubTitle from '../utility/SubTitle'
import BrandCard from './BrandCard'


const BrandFeatured = ({ title, btnTitle }) => {

  const Dispatch = useDispatch()

  useEffect(() => {
    Dispatch(ShowBrand())
  }, [])

  // get data Brand
  const Brands = useSelector(state => state.Brand.Brands.slice(0, 5))

  return (
    <Container>

      <SubTitle title={title} btnTitle={btnTitle} pathText="/Allbrands" />
      <Row className='d-flex justify-content-center'>

        { Brands &&
          Brands.map(item => <BrandCard
            key={item.id}
            img={item.img}
            title={item.name}
          />)
        }
   

      </Row>

    </Container>
  )
}

export default BrandFeatured