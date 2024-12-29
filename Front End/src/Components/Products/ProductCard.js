import React from 'react'
import { Button, Card, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


import '../../css/Card.css'
import { success } from '../../Notification/Notification'


const ProductCard = ({ img, prix, avant_promo, Desc, title, category, id }) => {

    const history = useNavigate()

    const AddToCart = () => {
        if (!localStorage.getItem('Client')) {
            history('/register')
        } else {
            const product = {id, img, title, Desc, category, avant_promo }
            let products = JSON.parse(localStorage.getItem('Cart'))
            const NewArray = [...products , product ]
            localStorage.setItem('Cart',  JSON.stringify(NewArray) );
            success('تمت إضاته إلى العربة')
        }
    }

    return ( 
        <Col
            xs={6}
            sm={6}
            md={4}
            lg={2}
            className=' mb-3 '
            style={{ marginLeft: '90px' }}
        >
            <div className="container">
                <div className="card">
                    {/* <div className="top-div">  <span><i className="fa fa-shopping-cart"></i><small></small></span> </div> */}
                    <Link to="/Products/:id">
                        <div className="image-section">
                            <img src={"http://127.0.0.1:8000/products/" + img} />
                        </div>
                    </Link>
                    <div className="bottom-div">
                        <h3> {title} </h3>
                        <div>
                            <div className="prix"> {prix} $ </div>
                            <div className="prix_promo"> {avant_promo} $ </div>
                        </div>
                    </div>
                    <p> {Desc} </p>

                    <div className="last-section">
                        <div className="last">
                            <button onClick={AddToCart}> + Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>



        </Col>
    )
}

export default ProductCard



