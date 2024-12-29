import React from 'react'
import next from './../../images/next.jpg'


const RightButton = ({onClick,onDisable}) => {
    return (
        <div>
            <img
                src={next}
                alt=""
                width="55px"
                height="55px"
                onClick={onClick}
                onDisable={onDisable}
                style={{ float: 'right', marginTop: '100px', cursor: 'pointer' }}
            />
        </div>)
}

export default RightButton