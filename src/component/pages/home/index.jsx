import React from 'react'
import './style.css'
import Button from '../../button';
import bg from '../Assets/bgecom.png'
import {BannerPost} from '../product/index'
import OfferBanner from '../Assets/banneroffer.png'
import { useSelector } from 'react-redux';


// react icon 
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import PopularProduct from '../popular_product';




const Home = () => {
  const products = useSelector(state => state.products.allProducts);
  const mensItem = products.filter(product => product.type === "mens");
  const kidsItem = products.filter(product => product.type === "kids");
  

  return (
    <>
    <div style={{backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}}>
     <div className='home'>
     <div className="home-text">
        <div className="heading">
          Digital Shopping
          <br /> Hub Junction
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga, doloribus itaque magni ex saepe vel amet alias nulla sint eius quos? Sit, quis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis est maxime temporibus itaque error! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, obcaecati?</p>
      </div>

      <div className="review">
        <div className="star">
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
          <MdOutlineStar />
        </div>
        <div>
          <b>198k</b> Excellent Reviews
        </div>
      </div>
      <div className="btn">
       <Button text="Shop now" bgColor="black" txColor="white"/>
       <Button text="Offers" bgColor="white" txColor="black" icon={<MdOutlineLocalOffer />}/>

      </div>
     </div>
    </div>
     <div style={{height:"100vh",
             display:"flex",
             alignItems:"center"}} className='bgcolor'>
     <PopularProduct text={"Popular Products"} num={5} items={mensItem}/>
     </div>
     <div style={{width:"98vw", margin:"auto" , overflow:"hidden"}}>
     <BannerPost heading="Summer Sale 50%" text="Men’s Leather Formal Wear Shoes" btnText="Go to store" banner={OfferBanner}/>
     </div>
     <PopularProduct text={"Latest Products"} num={10} items={kidsItem} className='bgcolor'/>



    </>

  )
}

export default Home