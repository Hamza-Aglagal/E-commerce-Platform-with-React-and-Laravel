import React from 'react'
import UserProfile from '../../Components/User/UserProfile'
import UserSideBar from '../../Components/User/UserSideBar'


const UserProfilePage = () => {
    return (
        <div style={{minHeight:'670px',display:'flex', flexFlow:'row nowrap'}}>
            <UserSideBar />
            <UserProfile />
        </div>
    )
}

export default UserProfilePage




