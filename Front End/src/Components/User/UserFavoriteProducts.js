import React from 'react'
import ProductCard from '../Products/ProductCard'
import photoProduct from './../../images/phone-2.jpg'
const UserFavoriteProducts = () => {
    return (
        <div className='User-FavoriteProducts-content'>
            <div className='fs-3 fw-bold my-3'>  المفضلة  </div>
            <div className='FavoriteProducts-Cards-Content'> 
                <ProductCard prix={3000} avant_promo={1500} product={photoProduct} />
                <ProductCard prix={3000} avant_promo={1500} product={photoProduct} />
                <ProductCard prix={3000} avant_promo={1500} product={photoProduct} />
                <ProductCard prix={3000} avant_promo={1500} product={photoProduct} />
                <ProductCard prix={3000} avant_promo={1500} product={photoProduct} />
                <ProductCard prix={3000} avant_promo={1500} product={photoProduct} />
            </div>
        </div>
    )
}

export default UserFavoriteProducts



