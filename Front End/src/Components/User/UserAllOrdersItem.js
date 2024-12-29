import React from 'react'
import UserAllOrdersCard from './UserAllOrdersCard'

const UserAllOrdersItem = () => {
    return (
        <div className='User-Item-Content'>
            <div className='fs-6 fw-bold '> طلب رقم #242 </div>
            <UserAllOrdersCard/>
            <UserAllOrdersCard/>
            <UserAllOrdersCard/>
            <div className='UserItem-LastSection'>
                <p>  <span className='fw-bold'>  الحالة : </span> قيد التنفيد </p>
                <p className='fw-bold' > 3000$ </p>
            </div>
        </div>
    )
}

export default UserAllOrdersItem