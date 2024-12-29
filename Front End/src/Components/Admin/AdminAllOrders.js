import React from 'react'
import AdminCardAllOrders from './AdminCardAllOrders'

const AdminAllOrders = () => {
    return (
        <div className='Admin-AllOrders-content'>
            <div>
                <div className='fs-3 fw-bold my-3'> إدارة كل الطلبات </div>

            </div>
            <div className='Admin-AllOrders-content-cards' >
                <AdminCardAllOrders />
                <AdminCardAllOrders />
                <AdminCardAllOrders />
                <AdminCardAllOrders />
            </div>
        </div>
    )
}

export default AdminAllOrders