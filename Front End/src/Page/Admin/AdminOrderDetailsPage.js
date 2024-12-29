import React from 'react'
import AdminOrderDetails from '../../Components/Admin/AdminOrderDetails'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminOrderDetailsPage = () => {
    return (
        <div>
            <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

                <AdminSideBar />
                <AdminOrderDetails />
            </div>

        </div>
    )
}

export default AdminOrderDetailsPage