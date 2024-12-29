import React from 'react'
import { useState } from 'react'
import AdminCardAllProducts from './AdminCardAllProducts'

const AdminAllProducts = ({ currentItems }) => {

    return (
        <div className='Admin-AllProducts-content'>
            <div>
                <div className='fs-3 fw-bold my-3'> إدارة جميع المنتجات </div>

            </div>
            <div className='Admin-AllProducts-content-cards' >

                {
                    currentItems ? currentItems.map(item => <AdminCardAllProducts
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        prcAfterPromo={item.prcAfterPromo}
                        desc={item.desc}
                        img={item.img}

                    />): <p> is vide </p>
                }


            </div>
        </div>
    )
}

export default AdminAllProducts







