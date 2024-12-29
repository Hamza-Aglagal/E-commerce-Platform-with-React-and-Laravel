import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom"

const ProtectedClients = (props) => {

    const history = useNavigate()

    const Prot = props.Protect

    useEffect(() => {
        if (!localStorage.getItem('Client') ) {
            history('/')
        }
    }, [])



    return (
        <div>
            <Prot />
        </div>
    )
}

export default ProtectedClients