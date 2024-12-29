import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import Paginition from '../../Components/utility/Paginition'

const AllBrand = () => {
    return (

        <div style={{ minHeight: '670px' }}>
            <BrandContainer/>
            <div className='d-flex justify-content-center align-items-center mt-5'>
                <Paginition />
            </div>
        </div>

    )
}

export default AllBrand


