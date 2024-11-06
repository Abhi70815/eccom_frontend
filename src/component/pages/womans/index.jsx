import React from 'react'
import PopularProduct from '../popular_product'
import { BannerPost } from '../product'
import womanOffersImg from '../Assets/bannerwomens.png'
import { useSelector } from 'react-redux'

const Womans = () => {
  const products = useSelector(state => state.products.allProducts);
  const womansItem = products.filter(product => product.type === "womans");
  // console.log(womansItem)
  return (
   <div>
     <div style={{
      width:"80vw",
       margin:"auto",
       display:"flex",
       justifyContent:"center",
       boxShadow: "-1px 1px 5px 0px rgba(0,0,0,0.24)",
       marginTop:"30px"

       }}>
     <BannerPost  banner={womanOffersImg}/> 
     </div>
     <PopularProduct num={20}  items={womansItem} className='bgcolor'/>
   </div>
  )
}

export default Womans