import React from 'react'
import Product from './../../images/Pc-bg.png'
import { RiDeleteBin6Line } from "react-icons/ri";


const CartItem = ({ Card }) => {

    const Remove = () => {
        let Array = JSON.parse(localStorage.getItem('Cart'))
        const NewArray = Array.filter(item => item.id !== Card.id);
        localStorage.setItem('Cart', JSON.stringify(NewArray))
    }


    return (
        <div className='Cart-Item'>
            <div className='Cart-img'>
                <img src={"http://localhost:8000/" + Card.img} />
            </div>

            <div className='Cart-Desc'>
                <div className='Cart-sub'>
                    <p className=' mt-1'> <span style={{ opacity: 0.7 }}> {Card.category} </span>   </p>
                    <div style={{ cursor: 'pointer' }} className='d-flex flex-row align-items-center' onClick={Remove} >
                        <RiDeleteBin6Line className='mb-2' />
                        <p className='fw-bold mt-1' > إزالة </p>
                    </div>
                </div>

                <div className='Description' >
                    <p> {Card.Desc} </p>
                    <div className='cart-type'>
                        {/* <p> <span style={{ opacity: 0.7 }}>  الماركة : </span>  Apple </p> */}
                        {/* <div className='Cart-Color-Product'>
                            <span style={{ opacity: 0.7 }}> اللون : </span>
                            <span className='Cart-Color' style={{ backgroundColor: 'black' }}>  </span>
                        </div> */}
                    </div>
                </div>
                <div className='Cart-Price-Content'>
                    <div className='cart-Content'>
                        <p> <span style={{ opacity: 0.7 }}>  الكمية : </span> </p>
                        <input type='number' />
                    </div>
                    <div>
                        <p className='fw-bold'> {Card.avant_promo} $ </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem