import React from 'react'

const Button = ({text, bgColor, txColor,icon}) => {
    // console.log(icon)
  return (
    <button style={
        {
        backgroundColor:bgColor,
         color:txColor,
         padding:"10px 20px",
         borderRadius:"20px",
         border:"none",
          display:'flex',
          gap:"2px",
          alignItems:"center"

        }
    }>{icon}{text}</button>
  )
}

export default Button