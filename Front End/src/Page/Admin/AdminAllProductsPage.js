import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showProductsApi } from '../../Api/Api'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import Paginition from '../../Components/utility/Paginition'
import { ShowProducts } from '../../Redux/Actions/ProductsAction'

const AdminAllProductsPage = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);

    const Dispatch = useDispatch()

    useEffect(() => {
        Dispatch(ShowProducts())
    }, [])

    const Products = useSelector(state =>  state.Products.products)


    const pageCount = (Products.length) / itemsPerPage
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Products.slice(indexOfFirstItem, indexOfLastItem);



    return (
        <div>
            <div style={{ minHeight: '670px' }} className='Admin-AllProducts' >

                <AdminSideBar />
                <AdminAllProducts currentItems={currentItems} />

            </div>
            <Paginition setCurrentPage={setCurrentPage} pageCount={parseInt(pageCount)} />

        </div>

    )
}

export default AdminAllProductsPage