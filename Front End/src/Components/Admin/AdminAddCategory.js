import React from 'react'
import Avatar from './../../images/AddImg-bg.png'
import { toast } from 'react-toastify';
import { useState } from 'react';
import axios from 'axios';
import { AddCategoryApi } from '../../Api/Api';
import { useDispatch, useSelector } from 'react-redux';
import { AddCategory } from '../../Redux/Actions/CategoryAction';


const AdminAddCategory = () => {

    //get Errors
    const Error = useSelector(state => state.Category.errors)

    const Dispatch = useDispatch()

    // read inputs
    const [img, setimg] = useState()
    const [NameCategory, setNameCategory] = useState()

    const Formdata = new FormData();
    Formdata.append('name', NameCategory)
    Formdata.append('img', img)


    // ---------handelSubmit------------
    const handelSubmit = async (e) => {
        e.preventDefault()
        Dispatch(AddCategory(Formdata))

    }


    return (
        <form onSubmit={handelSubmit} className='Admin-AddBrand-content' >
            <div className='fs-3 fw-bold my-3'> إضافة تصنيف جديد </div>
            <div>
                <h5> صورة التصنيف </h5>
                <img src={Avatar} />
                <input type='file' onChange={(e) => setimg(e.target.files[0])} style={{ zIndex: '1111', width: '8rem', height: '7rem', position: 'absolute', marginRight: '-8rem', opacity: '0' }} />
                {
                    img && <img src={URL.createObjectURL(img)} alt='img'  style={{marginRight:'1rem'}}/>
                }

                <p className='text-danger'> {Error} </p>

                <input
                    type='text'
                    className='input-form d-block px-1'
                    value={NameCategory}
                    placeholder='إسم التصنيف'
                    onChange={(e) => setNameCategory(e.target.value)}
                />
                <div>
                    <button> حفظ التعديلات </button>
                </div>
            </div>
        </form>
    )
}

export default AdminAddCategory