import React, { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Logo from '../../images/Logo.png'
import { ShowCategory } from '../../Redux/Actions/CategoryAction'
import CategoryCard from './CategoryCard'


const CategoryContainer = () => {

    const Dispatch = useDispatch()

    useEffect(() => {
        Dispatch(ShowCategory())
    }, [])

    // get data gategory
    const Categories = useSelector(state => state.Category.Category)

    return (
        <Container className='mt-5'>
            <p className='mb-5 fs-2' > كل التصنيفات  </p>
            <Row className='d-flex justify-content-center'>
                {
                    Categories.map(item => <CategoryCard 
                        key={item.id}
                        title={item.name}
                        img={item.img} />
                    )
                }

            </Row>

        </Container>
    )
}

export default CategoryContainer