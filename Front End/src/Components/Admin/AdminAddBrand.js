import axios from 'axios'
import React, { useState } from 'react'
import Avatar from './../../images/AddImg-bg.png'
import { toast } from 'react-toastify';
import { AddBrandApi } from '../../Api/Api';
import { useDispatch, useSelector } from 'react-redux';
import { AddBrand } from '../../Redux/Actions/BrandAction';



const AdminAddBrand = () => {

    //get Errors
    const Error = useSelector(state => state.Brand.errors)

    const Dispatch = useDispatch()

    const [img, setimg] = useState()
    const [NameBrand, setNameBrand] = useState()

    const Formdata = new FormData();
    Formdata.append('name', NameBrand)
    Formdata.append('img', img)


    // ---------handelSubmit------------
    const handelSubmit = async (e) => {
        e.preventDefault()

        Dispatch(AddBrand(Formdata))

    }



    return (
        <form onSubmit={handelSubmit} className='Admin-AddBrand-content' >
            <div className='fs-3 fw-bold my-3'> إضافة ماركة </div>
            <div>
                <h5> صورة الماركة </h5>
                <img src={Avatar} />
                <input type='file' onChange={(e) => setimg(e.target.files[0])} style={{ zIndex: '1111', width: '8rem', height: '7rem', position: 'absolute', marginRight: '-8rem', opacity: '0' }} />

                {
                    img && <img src={URL.createObjectURL(img)} alt='img' style={{ marginRight: '1rem' }} />
                }

                <p className='text-danger'> {Error} </p>

                <input
                    type='text'
                    value={NameBrand}
                    className='input-form d-block px-1'
                    placeholder='إسم الماركة'
                    onChange={(e) => setNameBrand(e.target.value)}
                />
                <div>
                    <button> حفظ التعديلات </button>
                </div>
            </div>
        </form>
    )
}

export default AdminAddBrand