import React from 'react'
import AdminAllOrders from '../../Components/Admin/AdminAllOrders'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import Paginition from '../../Components/utility/Paginition'

const AdminAllOrdersPage = () => {
  return (
    <div>
      <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

        <AdminSideBar />
        <AdminAllOrders />

      </div>
      <Paginition />

    </div>
  )
}

export default AdminAllOrdersPage