import React from 'react'

const AdminAddSubCategory = () => {
    return (
        <div className='Admin-AddBrand-content' >
            <div className='fs-3 fw-bold my-3'> إضافة تصنيف فرعي جديد </div>
            <div>
                <input
                    type='text'
                    className='input-form d-block px-1 mt-3'
                    placeholder=' إسم التصنيف الفرعي '
                />
                <select>
                    <option> التصنيف الأول </option>
                    <option> التصنيف الثاني </option>
                    <option> التصنيف الثالث </option>
                    <option> التصنيف الرابع </option>
                </select>
                <div>
                    <button> حفظ التعديلات </button>
                </div>
            </div>
        </div>
    )
}

export default AdminAddSubCategory