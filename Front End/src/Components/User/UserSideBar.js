import React, { useEffect, useState } from 'react'
import { FiX } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-router-dom';
import profile from './../../images/img_avatar_profile.png'

const UserSideBar = () => {

    const [Client, setClient] = useState('null')

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('Client'))){
            setClient(JSON.parse(localStorage.getItem('Client')))
        }
    }, [])
    

    return (
        <div className='UserSideBar' >

            <div className='Menu'>
                <div className='profile-user'>
                    <div className='img-profile-user'>
                        <img src={profile} alt=' الصورة الشخصية  ' />
                    </div>
                    <h3> {Client.fullName} </h3>
                </div>
                <div className='Menu-items'>
                    <Link to='/user/profile' className='bnt-Menu-user' >
                        <button> الملف الشخصي </button>
                    </Link>
                    <Link to='/user/allorders' className='bnt-Menu-user' >
                        <button>  إدارة الطلبات </button>
                    </Link>
                    <Link to='/user/favoriteproducts' className='bnt-Menu-user' >
                        <button> القائمة المفضلة </button>
                    </Link>
                    <Link to='/user/help' className='bnt-Menu-user' >
                        <button>  المساعدة  </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default UserSideBar





