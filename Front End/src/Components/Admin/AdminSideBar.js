import React from 'react'
import { Link } from 'react-router-dom'

const AdminSideBar = () => {

    const Logout = () => {
        localStorage.clear()
        window.location.replace('/');
    }

    return (
        <div className='Admin-SideBar'>

            <Link to='/admin/allproducts' style={{ textDecoration: 'none' }}>
                <button> إدارة المنتجات </button>
            </Link>
            <Link to='/admin/allorders'>
                <button> إدارة الطلبات  </button>
            </Link>
            <Link to='/admin/addbrand'>
                <button> أضف ماركة  </button>
            </Link>
            <Link to='/admin/addcategory'>
                <button> أضف تصنيف </button>
            </Link>
            <Link to='/admin/AddProduct'>
                <button> أضف منتج </button>
            </Link>
            <Link onClick={Logout}>
                <button className='bg-dark' >  خروج  </button>
            </Link>
        </div>
    )
}

export default AdminSideBar