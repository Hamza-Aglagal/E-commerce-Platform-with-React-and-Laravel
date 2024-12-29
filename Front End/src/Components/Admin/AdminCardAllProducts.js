import axios from 'axios'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteProductApi } from '../../Api/Api'
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { DeleteProducts, EditProducts } from '../../Redux/Actions/ProductsAction'



const AdminCardAllProducts = (props) => {

    const history = useNavigate()
    const Dispatch = useDispatch()

    // delete product
    const deleted = () => {
        Dispatch(DeleteProducts(props.id))
    }

    // updated product
    const updated = () => {
        history(`/admin/UpdateProduct/${props.id}`)  
        Dispatch(EditProducts(props.id))   
    }


    return (
        <div className='Update-Card'>
            <div className='Admin-allproduct-Section-top'>
                <div onClick={deleted}> ازاله </div>
                <div onClick={updated}> تعديل </div>
            </div>

            {/* <Link to={`/Products/${props.id}`}> */}
            <div className='Admin-allproduct-Section-img ' >
                <img src={"http://127.0.0.1:8000/products/" + props.img} alt='photo' className='rounded' />
            </div>
            {/* </Link> */}

            <div className="Admin-allproduct-Section-card-title">
                <p className='text-primary'> {props.name} </p>
                {props.desc}
            </div>
            <div className='Admin-allproduct-Section-Rating' >
                <p> {props.prcAfterPromo}$ </p>
                <p> 4.5⭐ </p>
            </div>

        </div>
    )
}

export default AdminCardAllProducts