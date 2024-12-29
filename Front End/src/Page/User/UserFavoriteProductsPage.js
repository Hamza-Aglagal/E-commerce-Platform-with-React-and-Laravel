import React from 'react'
import UserFavoriteProducts from '../../Components/User/UserFavoriteProducts'
import UserSideBar from '../../Components/User/UserSideBar'
import Paginition from '../../Components/utility/Paginition'

const UserFavoriteProductsPage = () => {
    return (
        <div style={{ minHeight: '670px', display: 'flex', flexFlow: 'row nowrap' }}>
            <UserSideBar />
            <div className='User-FavoriteProducts-content'>
                <UserFavoriteProducts />
                <Paginition />
            </div>
        </div>
    )
}

export default UserFavoriteProductsPage




