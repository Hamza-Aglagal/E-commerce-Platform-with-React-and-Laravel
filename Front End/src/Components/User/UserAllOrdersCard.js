import React from 'react'
import photo from './../../images/phone-2.jpg'


const UserAllOrdersCard = () => {
  return (
    <div className='User-Card-Orders'>
        <div className='Card-Section-Image'>
            <img src={photo} alt='Order product' />
        </div>
        <div className='Card-Section-description'>
          <p className='fs-6'>
             Apple iPhone 14 Pro 128GB Space Black (Verizon) MPXT3LL/A - Best Buy 
          </p>
          <p className='fs-7'> <span className='text-warning fw-bold'> 4.5⭐ </span> (160تقييم)  </p>
          <div>
            <p> الكمية </p>
            <input type='number' />
          </div>
        </div>
    </div>
  )
}

export default UserAllOrdersCard