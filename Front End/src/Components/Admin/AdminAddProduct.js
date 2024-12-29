import React, { useEffect } from 'react'
import Avatar from './../../images/AddImg-bg.png'
import { useState } from 'react';
import { AddProducts } from '../../Redux/Actions/ProductsAction';
import { useDispatch, useSelector } from 'react-redux';
import { ShowCategory } from '../../Redux/Actions/CategoryAction'


const AdminAddProduct = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ShowCategory())
    }, [])


    // get errors
    const Error = useSelector(state => state.Products.errors)

    // get Categories
    const Categories = useSelector(state => state.Category.Category)

    const [name, setname] = useState('')
    const [desc, setdesc] = useState('')
    const [img, setimg] = useState()
    const [price, setprice] = useState()
    const [prcAfterPromo, setprcAfterPromo] = useState()
    const [category, setcategory] = useState('')

    const handleSelectChange = (e) => {
        setcategory(e.target.value)
    }


    const Formdata = new FormData();
    Formdata.append('name', name)
    Formdata.append('desc', desc)
    Formdata.append('img', img)
    Formdata.append('price', price)
    Formdata.append('prcAfterPromo', prcAfterPromo)
    Formdata.append('category', category)

    // ---------handelSubmit------------
    const handelSubmit = async (e) => {
        e.preventDefault()

        // sent data
        dispatch(AddProducts(Formdata))
    }



    return (
        <form onSubmit={handelSubmit} className='Admin-AddProducts-content' >
            <div className='fs-3 fw-bold my-3'> إضافة منتج  </div>
            <div className='Admin-AddProduct-Section2'>
                <h5> صور المنتج </h5>
                <div className='images'>
                    <input type='file' style={{ opacity: '0', zIndex: '111' }} name='img' onChange={(e) => setimg(e.target.files[0])} />
                    <img src={Avatar} style={{ marginRight: '-5.5rem', marginTop: '-.1rem' }} alt='photo' />
                    {
                        img && <img src={URL.createObjectURL(img)} alt="photo" />
                    }

                </div>

                <p className='text-danger'> {Error} </p>

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

                <select value={category} onChange={handleSelectChange} name='category'>

                    {
                        Categories &&
                        Categories.map(item =>
                            <option key={item.id} value={item.name}> {item.name} </option>
                        )
                    }
                 
                </select>

                {/* <Multiselect
                    className='Multiselect'
                    placeholder='التصنيف الفرعي'
                    options={options} // Options to display in the dropdown
                    onSelect={onSelect} // Function will trigger on select event
                    onRemove={onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                /> */}

                {/* <select>
                    <option>  الماركة </option>
                    <option> الماركة الأولى</option>
                    <option> الماركة الثانية </option>
                    <option> الماركة الثالثة </option>
                    <option> الماركة الرابعة </option>
                </select> */}

                {/* <div className='Color-product-Admin' >
                    <p> الألوان المتاحة للمنتج </p>
                    <div>
                        <div className='Circele-color-product-Admin'>  </div>
                        <div className='Circele-color-product-Admin'>  </div>
                        <div className='Circele-color-product-Admin'>  </div>
                        <GrAddCircle  style={{fontSize:'1.5rem', cursor:'pointer',marginRight:'.5rem'}}  />
                    </div>
                </div> */}


                <div className='btn-Admin-AddProduct'>
                    <button> حفظ المنتج</button>
                </div>
            </div>



        </form>
    )
}

export default AdminAddProduct