import React from 'react'
import Avatar from './../../images/AddImg-bg.png'
import Multiselect from 'multiselect-react-dropdown';
import { GrAddCircle } from "react-icons/gr";
import { useState } from 'react';
import { AddProductApi, updateProductsApi } from '../../Api/Api';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { editProductsApi } from '../../Api/Api'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateProducts } from '../../Redux/Actions/ProductsAction';



const AdminUpdateProduct = () => {

    const dispatch = useDispatch()
    const [Error, setError] = useState()

    //get product
    const Product = useSelector(state => state.Products.products)

    //get error
    const errors = useSelector(state => state.Products.errors)

    useEffect(() => {
        setname(Product[0].name)
        setdesc(Product[0].desc)
        setimg(Product[0].img)
        setprice(Product[0].price)
        setprcAfterPromo(Product[0].prcAfterPromo)
        setcategory(Product[0].category)
    }, [Product])
    

    const [name, setname] = useState()
    const [desc, setdesc] = useState('')
    const [img, setimg] = useState()
    const [price, setprice] = useState()
    const [prcAfterPromo, setprcAfterPromo] = useState()
    const [category, setcategory] = useState('')

    const Formdata = new FormData();
    Formdata.append('name', name)
    Formdata.append('desc', desc)
    Formdata.append('img', img)
    Formdata.append('price', price)
    Formdata.append('prcAfterPromo', prcAfterPromo)
    Formdata.append('category', category)


    const [selectedValue, setSelectedValue] = useState('التصنيف الرئيسي ');
    const handleSelectChange = (e) => {
        setcategory(e.target.value)
        setSelectedValue(category)
    }


    // ---------handelSubmit------------
    const handelSubmit = async (e) => {
        e.preventDefault()
        
        // Update Product
        dispatch(UpdateProducts( Product[0].id , Formdata ))

        
    }



    return (
        <form onSubmit={handelSubmit} className='Admin-AddProducts-content' >
            <div className='fs-3 fw-bold my-3'> تعديل منتج  </div>
            <div className='Admin-AddProduct-Section2'>
                <h5> صور المنتج </h5>
                <div className='images'>
                    <input type='file' style={{ opacity: '0', zIndex: '111' }} name='img' onChange={(e) => setimg(e.target.files[0])} />
                    <img src={Avatar} style={{ marginRight: '-5.5rem', marginTop: '-.1rem' }} alt="img" />
                    <img src={'http://127.0.0.1:8000/products/' + img} style={{ marginRight: '5rem' }} alt="img" />
                </div>

                {
                    errors && <p className='text-danger'> {errors} </p>
                }

                <input
                    type='text'
                    className='input-form d-block px-1'
                    placeholder=' إسم المنتج '
                    name='name'
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                />
                <textarea
                    type='text'
                    className='input-form d-block px-1 description-product'
                    placeholder=' وصف المنتج '
                    onChange={(e) => setdesc(e.target.value)}
                    name='desc'
                    value={desc}
                />
                <input type='number' value={price} name='price' className='input-form d-block px-1' placeholder='  السعر قبل الخصم ' onChange={(e) => setprice(parseFloat(e.target.value))} />
                <input type='number' value={prcAfterPromo} name='prcAfterPromo' className='input-form d-block px-1' placeholder='  سعر المنتج ' onChange={(e) => setprcAfterPromo(parseFloat(e.target.value))} />

                <select value={selectedValue} onChange={handleSelectChange} name='category'>
                    <option value='ops1'> التصنيف الرئيسي </option>
                    <option value='ops2'> التصنيف الأول </option>
                    <option value='ops3'> التصنيف الثاني </option>
                    <option value='ops4'> التصنيف الثالث </option>
                    <option value='ops5'> التصنيف الرابع </option>
                </select>




                <div className='btn-Admin-AddProduct'>
                    <button> حفظ المنتج</button>
                </div>
            </div>



        </form>
    )
}

export default AdminUpdateProduct