import React from 'react'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Paginition from '../../Components/utility/Paginition'

const AllCategoryPage = () => {
  return (
    <div style={{ minHeight: '670px' }}>
      <CategoryContainer />
      <div className='d-flex justify-content-center align-items-center mt-5'>
        <Paginition />
      </div>
    </div>
  )
}

export default AllCategoryPage