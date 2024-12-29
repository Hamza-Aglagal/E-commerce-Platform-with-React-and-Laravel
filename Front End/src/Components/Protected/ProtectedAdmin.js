import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const ProtectedAdmin = (props) => {

    const history = useNavigate()

    const Prot = props.Prot

    useEffect(() => {
        if (!localStorage.getItem('Admin')) {
            history('/')
        }
    }, [])



    return (
        <div>
            <Prot />
        </div>
    )
}

export default ProtectedAdmin