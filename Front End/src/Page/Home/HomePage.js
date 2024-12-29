import React, { useEffect } from 'react'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import CardProductsContainer from '../../Components/Products/CardProductsContainer'
import DiscountSection from '../../Components/Home/DiscountSection'
import BrandFeatured from '../../Components/Brand/BrandFeatured'
import brandImg from '../../images/brand-img.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { ShowCategory } from '../../Redux/Actions/CategoryAction'
import { ShowProducts } from '../../Redux/Actions/ProductsAction'



const HomePage = () => {

    const Dispatch = useDispatch()

    useEffect(() => {
        Dispatch(ShowProducts())
    }, [])

    // get data Products
    const Products = useSelector(state => state.Products.products)
    console.log(Products)


    return (
        <div style={{ minHeight: '670px' }}>

            <Slider />

            <HomeCategory />

            <CardProductsContainer PrPopulaire={Products.slice(0,4)} title="الأكثر مبيعا" btnTitle="المزيد" pathText="/Products" />
            <CardProductsContainer PrPopulaire={Products.slice(0,4)} title="الأكثر **" btnTitle="المزيد" pathText="/Products" />

            <DiscountSection />

            <CardProductsContainer PrPopulaire={Products.slice(0,4)} title="الأكثر +++" btnTitle="المزيد" pathText="/Products" />

            <BrandFeatured title='أشهر الماركات' btnTitle='المزيد' />


        </div>
    )
}

export default HomePage