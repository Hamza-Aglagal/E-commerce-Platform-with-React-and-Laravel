import React from 'react'
import UserAllOrdersCard from './UserAllOrdersCard'
import UserAllOrdersItem from './UserAllOrdersItem'

const UserAllOrders = () => {
    return (
        <div className='User-Orders-content' >
            <div className='fs-3 fw-bold my-3'> أهلا حمزة أكلاكال </div>
            <div className='User-Orders-content-Item'>
                <UserAllOrdersItem />
                <UserAllOrdersItem />
            </div>
        </div>
    )
}

export default UserAllOrders



