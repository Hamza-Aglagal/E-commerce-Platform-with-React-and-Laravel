import React from 'react'
import Product from './../../images/Pc-bg.png'
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';



const AdminCardAllOrders = () => {
    return (
        <div className='Cart-Item'>
            <div className='Cart-img'>
                <img src={Product} />
            </div>

            <div className='Cart-Desc'>
                <div className='Cart-sub'>
                    <p className=' mt-1'> <span style={{ opacity: 0.7 }}> الطلب رقم 3532# </span>   </p>
                    <div style={{ cursor: 'pointer' }} className='d-flex flex-row align-items-center'>
                        <RiDeleteBin6Line className='mb-2' />
                        <p className='fw-bold mt-1'> إزالة </p>
                    </div>
                </div>
                <Link to='/admin/order/:id' style={{ textDecoration: 'none', color: 'black' }}>

                    <div className='Description' >
                        <p> the iPhone 14 and iPhone 14 Plus include Super Retina XDR OLED displays that OLED displays that  </p>
                        <div className='cart-type'>
                            <p> <span style={{ opacity: 0.7 }}>  الماركة : </span>  Apple </p>
                            <div className='Cart-Color-Product'>
                                <span style={{ opacity: 0.7 }}> اللون : </span>
                                <span className='Cart-Color' style={{ backgroundColor: 'black' }}>  </span>
                            </div>
                        </div>
                    </div>
                    <div className='Cart-Price-Content'>
                        <div className='cart-Content'>
                            <p> <span style={{ opacity: 0.7 }}>  الكمية : </span> </p>
                            <input type='number' />
                        </div>
                        <div>
                            <p className='fw-bold'> 1000£ </p>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}

export default AdminCardAllOrders