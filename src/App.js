import React, { useEffect, useState } from 'react';
import Navbar from './component/Navbar/Navbar';
import Routers from './component/Route';
import Footer from './component/pages/footer';
import { EmailOffer } from './component/pages/product';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './component/Redux/ProductSlice';
// import axios from 'axios';
// import Products from './component/pages/Products/Products.js'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import products from './component/pages/Products/Products.js';
import SignupLogin from './component/pages/signUp-Login/index.jsx';

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const userAuth = useSelector((state) => state.products.userAuth);
  console.log(userAuth )
  // const product = useSelector((state) => state.products.allProducts);
  // console.log(dispatch(setProduct(products)))

  // const fetchData = async () => {
  //   try {
  //     const response = await axios('http://localhost:4000/data');
  //     dispatch(setProduct(response.data));
  //     console.log(response.data.json())
  //   } catch (error) {
  //     setError(error.message);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    setLoading(true);
    dispatch(setProduct(products))
    setLoading(false)
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  // if (error) {
  //   return <p>Error: {error}</p>;
  // }

  return (
<>
    < Navbar />
    
    { userAuth?<div style={{backgroundColor:"#e4e5eb"}}>
    <Routers />
    <EmailOffer />
    <Footer />
    <ToastContainer/>
  </div > : <SignupLogin />}
  </>
  );
};

export default App;