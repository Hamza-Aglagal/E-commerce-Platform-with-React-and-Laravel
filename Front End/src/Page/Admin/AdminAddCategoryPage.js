import React from 'react'
import AdminAddCategory from '../../Components/Admin/AdminAddCategory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddCategoryPage = () => {
    return (
        <div>
            <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

                <AdminSideBar />
                <AdminAddCategory />
            </div>

        </div>
    )
}

export default AdminAddCategoryPage