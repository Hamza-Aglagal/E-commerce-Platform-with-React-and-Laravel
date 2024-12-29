import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Container } from 'react-bootstrap'
import CategoryHeader from '../../Components/Category/CategoryHeader'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import ProductDetailes from '../../Components/Products/ProductDetailes'
import RateCotainer from '../../Components/Rate/RateCotainer'


const ProductDetailsPage = () => {






  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryHeader />
      <Container>
        <ProductDetailes />
        <RateCotainer />
        <CardProductsContainer title="منتجات قد تعجبك" pathText='' />
      </Container>
    </div>
  )
}

export default ProductDetailsPage