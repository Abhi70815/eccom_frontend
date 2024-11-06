import React from 'react'
import PopularProduct from '../popular_product'
import { BannerPost } from '../product'
import mensOffersImg from '../Assets/bannermens.png'
import { useSelector } from 'react-redux'

const Mens = () => {
  const products = useSelector(state => state.products.allProducts);
  const mensItem = products.filter(product => product.type === "mens");
  return (
   <div className='bgcolor'>
     <div style={{
      width:"80vw",
       margin:"auto",
       display:"flex",
       justifyContent:"center",
       boxShadow: "-1px 1px 5px 0px rgba(0,0,0,0.24)",
       marginTop:"30px"

       }}>
     <BannerPost  banner={mensOffersImg}/> 
     </div >
     <PopularProduct num={20} items={mensItem} />
   </div>
  )
}

export default Mens