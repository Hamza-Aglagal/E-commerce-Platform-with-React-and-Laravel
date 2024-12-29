import React from 'react'
import UserAllOrders from '../../Components/User/UserAllOrders'
import UserSideBar from '../../Components/User/UserSideBar'

const UserAllOrdersPage = () => {
    return (
        <div style={{ minHeight: '670px', display: 'flex', flexFlow: 'row nowrap' }}>
            <UserSideBar />
            <UserAllOrders />
        </div>
    )
}

export default UserAllOrdersPage