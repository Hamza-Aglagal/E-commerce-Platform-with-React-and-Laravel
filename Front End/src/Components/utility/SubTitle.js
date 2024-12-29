import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SubTitle = ({ title, btnTitle, pathText }) => {
  return (
    <Container>
      <div className='d-flex justify-content-between pt-4 pb-2  ' style={{margin:'15px', padding:'15px', backgroundColor:'#ebe9e4'}}>
        <div className='h4 fw-bold'> {title} </div>
        <Link to={`${pathText}`} style={{textDecoration:'none'}} >
          <div className='h5 fw-bold subtitle-btn'> {btnTitle} </div>
        </Link>
      </div>
    </Container>
  )
}

export default SubTitle




