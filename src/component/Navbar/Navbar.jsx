import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

//  _React-icons
import { MdHome } from "react-icons/md";
import { GiHumanPyramid } from "react-icons/gi";
// import { MdShopTwo } from "react-icons/md";
import { TbMoodKid } from "react-icons/tb";
import { FaCartShopping } from "react-icons/fa6";
import { CiLogout } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuth } from '../Redux/ProductSlice';


const Navbar = () => {
 const [menu, setMenu]= useState(false)
 const navigate = useNavigate();
 const userAuth= useSelector((state)=>state.products.userAuth)
 const dispatch = useDispatch()

 const [totalCart, setTotalCart] = useState(0)
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const storedCartData = localStorage.getItem('cart');
    if (storedCartData) {
      setCartData(JSON.parse(storedCartData));
    }
  }, []);

  useEffect(() => {
    if (cartData.length > 0) {
      setTotalCart(cartData.length);
    }
  }, [cartData]);

  return (
    <div className='navbar'>
      <div className="logo">Logo</div>
      {menu || <ul>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/mens"><GiHumanPyramid />Men's</NavLink></li>
        <li><NavLink to="/womans"><MdShopTwo />Woman's</NavLink></li>
        <li><NavLink to="/kids"><TbMoodKid />Kids</NavLink></li>
      </ul>}
      <div className="nav-flex">
        <div className="cart" 
          // onClick={()=>navigate('/cart')}
          ><FaCartShopping />
           {/* <div>{totalCart}</div> */}
           </div>
   {userAuth &&   
   <button className='btn' 
   onClick={()=>{
    navigate('/login')
     dispatch(setUserAuth(false))
   }}><CiLogout />Logout</button>}
      <div className="menu">
      {menu ? <RxCross2 onClick={()=>setMenu(!menu)}/> : <RxHamburgerMenu onClick={()=>setMenu(!menu)}/>
      }
      </div>
      </div>

    </div>
  )
}

export default Navbar
