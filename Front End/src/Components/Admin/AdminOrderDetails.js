import React from 'react'
import AdminCardAllOrders from './AdminCardAllOrders'

const AdminOrderDetails = () => {
    return (
        <div className='Admin-AllOrders-content'>
            <div>
                <div className='fs-3 fw-bold my-3'>  تفاصيل الطلب رقم 3532#  </div>

            </div>
            <div className='Admin-AllOrders-content-cards' >
                <AdminCardAllOrders />
            </div>
            <div className='Admin-Orders-Section-Details'>
                <div className='fs-3 fw-bold my-3'>  تفاصيل العميل  </div>
                <div className='Admin-Orders-Details-client'>
                    <p> الإسم :  Hamza</p>
                    <p> النسب : Aglagal </p>
                    <p> الإيميل: HamzaAglagal@gmail.com </p>
                </div>
                <div className='Admin-Orders-Details-client-section-bottom'>
                    <p className='fs-5 fw-bold'> المدفوع 1300$ </p>
                    <div>
                        <select>
                            <option> حالة الطلب </option>
                            <option> قيد التنفيذ </option>
                            <option> تم الإنتهاء </option>
                            <option> إلغاء </option>
                        </select>
                        <button> حفظ  </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrderDetails