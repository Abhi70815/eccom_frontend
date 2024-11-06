import React, { useEffect, useState } from 'react'
import './style.css'
// import product_img from '../Assets/product_6.png'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import { addTocart } from '../../Redux/ProductSlice'


const ProductDetails = () => {
    const location= useLocation()
    // console.log(location.state)
    // const dispatch= useDispatch()
    const data = location.state;

    const [cartData, setCartData] = useState(() => {
        const storedCartData = localStorage.getItem('cart');
        return storedCartData ? JSON.parse(storedCartData) : [];
      });
    
      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartData));
      }, [cartData]);
    
      const handleCart = () => {
        const existingItem = cartData.find((item) => item.title === data.title);
        if (existingItem) {
          alert("Item already exists in cart");
        } else {
          setCartData((prevCartData) => [...prevCartData, data]);
        }
      };
  return (
    <div class="product_details">
        <div class="breadcrumb">
            <NavLink to='/home'>Home</NavLink> &gt; 
            <NavLink to='/mens'>Shop</NavLink> &gt; 
            <NavLink to='/womans'>Women</NavLink> &gt; 
            Aurora Frost Explorer Nomad Shirt
        </div>
        <div class="selected_product">
            <div class="product-images">
                <img src={data.image} alt="Side view of Aurora Frost Explorer Nomad Shirt"/>
               
            </div>
            <div class="product-details">
                <div class="product-title">{data.title}</div>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                    (122)
                </div>
                <div class="product-price">
                    <span class="original-price">${data.realPrice}</span>
                    <span class="discounted-price">${data.discPrice}</span>
                </div>
                <div class="product-size">
                    <label>Select Size:</label>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                </div>
                <div class="product-actions">
                    <button onClick={handleCart} className='addcart'>Add to Cart</button>
                    <button className="buy-now">Buy It Now</button>
                </div>
                <div class="product-meta">
                    Category: {data.type} | T-Shirt | Crop Top<br/>
                    Tags: Modern | Latest
                </div>
                <div class="product-tabs">
                    <button>Description</button>
                    <button>Care Guide</button>
                    <button>Size Guide</button>
                </div>
                <div class="product-description">
                    Lorem ipsum, dolor sit amet consectetur adipiscing elit. Tempore aperiam ad eos rem minus ratione sed. Officia libero sunt tempore laborum, dolor voluptas esse natus impedit mollitia neque.
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails