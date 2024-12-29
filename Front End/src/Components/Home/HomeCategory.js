import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from '../utility/SubTitle'
import Logo from '../../images/Logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { ShowCategory } from '../../Redux/Actions/CategoryAction'
import { useEffect } from 'react'
import { useState } from 'react'

const HomeCategory = () => {

    const Dispatch = useDispatch()
    const [SixCategory, setSixCategory] = useState()

    useEffect(() => {
        Dispatch(ShowCategory())
    }, [])

    // get data gategory
    const Categories = useSelector(state => state.Category.Category)
    

    useEffect(() => {
        setSixCategory(Categories.slice(0, 6))
    }, [Categories])

    return (
        <Container>
            <SubTitle title='التصنيفات' btnTitle='المزيد' pathText="/Allcategory"  />
            <Row className='d-flex justify-content-center'>

                {SixCategory &&
                    SixCategory.map(item => <CategoryCard
                        key={item.id}
                        title={item.name}
                        img={item.img}
                    />)
                }

            </Row>

        </Container>
    )
}

export default HomeCategory