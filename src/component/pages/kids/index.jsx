import React from 'react'
import PopularProduct from '../popular_product'
import { BannerPost } from '../product'
import kidsOffersImg from '../Assets/bannerkids.png'
import { useSelector } from 'react-redux'

const Kids = () => {
  const products = useSelector(state => state.products.allProducts);
  console.log(products)
  const kidsItem = products.filter(product => product.type === "kids");

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
     <BannerPost  banner={kidsOffersImg}/> 
     </div>
     <PopularProduct num={20} items={kidsItem} className='bgcolor'/>
   </div>
  )
}

export default Kids