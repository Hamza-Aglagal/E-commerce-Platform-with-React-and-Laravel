import React from 'react'
import prev from './../../images/prev.png'


const LeftButton = ({onClick,onDisable}) => {
  return (
    <div>
         <img 
         src={prev}
         alt=""
         width="55px"
         height="55px"
         onClick={onClick}
         onDisable={onDisable}
         style={{float:'left', marginTop:'100px', cursor:'pointer'}}
         />
    </div>
  )
}

export default LeftButton