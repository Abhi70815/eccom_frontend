import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

const Product = ({ProductData}) => {
const navigate= useNavigate();
  const {id,title,discPrice, realPrice,image}= ProductData;

const handleClick=()=>{
   navigate('/product_details',{state:ProductData})
}
  return (
    <>
     <div className='product' id={id} onClick={handleClick}>
      <img src={image} alt="product_image" />
      <div className="title">{title}</div>
      <div className="price">
        <div className="currPrice">${discPrice}</div>
        <div className="realPrice" style={{ textDecoration: "line-through" }}>${realPrice}</div>
      </div>
    </div>
    </>
  )
}
export default Product


// EMail offer 
export const EmailOffer = () => {

  return (

    <div className="emailOffer">
      <h1>Get Exclusive offers on Your Email</h1>
      <p>SUBSCRIBE TO OUR NEWSLETTER AND STAY UPDATED</p>
      <div className="email-form">
        <input type="email" placeholder="Your email address" />
        <button>Subscribe</button>
      </div>
    </div>
  )

}


// Banner posts

export const BannerPost = ({heading, text, btnText, banner}) => {
  return <div className='BannerPost' style={{backgroundImage:`url(${banner})`}}>
    <div className='text-content'>
      <h1>
        {heading}
      </h1>
      <p>
       {text}
      </p>
      <p className='btn' >
        {btnText}
      </p>
    </div>
    <div className='image-content'>
     
    </div>
  </div>
}

// export const BannerPost = () => {

//   return (
//     <div className="container">
//       <div className="text-content">
//         <h1>
//           Summer Sale 50%
//         </h1>
//         <p>
//           Men's Leather Formal Wear Shoes
//         </p>
//         <a className="button" href="#">
//           Go to store
//         </a>
//       </div>
//       <div className="image-content">
//         <img alt="A pair of white leather formal wear shoes with red and black stripes" height="400" src="https://storage.googleapis.com/a1aa/image/jD23GJy9KWobGpMmGcYjZIanuMEoOQqKsW4pZUwieqf0FDlTA.jpg" width="600" />
//       </div>
//     </div>
//   )
// }