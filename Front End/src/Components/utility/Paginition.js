import React from 'react'
import ReactPaginate from 'react-paginate'


const Paginition = ({setCurrentPage , pageCount}) => {

    const handlePageClick = (e) => {
        setCurrentPage(e.selected + 1)
    }

    return (
        < ReactPaginate
            className='paginate'
            breakLabel="..."
            nextLabel="التالي"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangedisplayed={2}
            pageCount={pageCount+1}
            previousLabel="السابق"
            containerClassName={" pagination justify-content-center p-3 "}
            pageClassName='page-item'
            pageLinkClassName="page-link "
            previousClassName="prevNext-item "
            nextClassName="prevNext-item "
            previouslinkClassName="page-link "
            nextLinkClassName="page-link "
            breakClassName="page-item "
            breakLinkClassName="page-link "
            activeClassName="activer "
        />
    )
}

export default Paginition