import React, { useEffect } from 'react'
import ProductCard from './ProductCard'
import { Container, Row } from 'react-bootstrap'
import SubTitle from '../utility/SubTitle'
import product from '../../images/produit-1.png'
import { useDispatch, useSelector } from 'react-redux'
import { ShowProducts } from '../../Redux/Actions/ProductsAction'


const CardProductsContainer = ({ title, btnTitle, pathText, PrPopulaire }) => {

  return (
    <Container>
      <SubTitle title={title} btnTitle={btnTitle} pathText={pathText} />
      <Row className='d-flex justify-content-right'>

        { PrPopulaire &&
          PrPopulaire.map(item => <ProductCard
            key={item.id}
            id={item.id}
            avant_promo={item.price}
            prix={item.prcAfterPromo}
            img={item.img}
            Desc={item.desc}
            title={item.name}
            category={item.category}
          />)
        }


      </Row>

    </Container>
  )
}

export default CardProductsContainer