import React from 'react'
import AdminAddSubCategory from '../../Components/Admin/AdminAddSubCategory'
import AdminSideBar from '../../Components/Admin/AdminSideBar'

const AdminAddSubCategoryPage = () => {
    return (
        <div>
            <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

                <AdminSideBar />
                <AdminAddSubCategory/>

            </div>

        </div>
    )
}

export default AdminAddSubCategoryPage