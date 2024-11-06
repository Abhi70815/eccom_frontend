import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Mens from '../pages/mens'
import Womans from '../pages/womans'
import Kids from '../pages/kids'
import SignupLogin from '../pages/signUp-Login'
import ProductDetails from '../pages/product_details'
import Cart from '../pages/cart'

const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womans' element={<Womans/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path='/login' element={<SignupLogin/>}/>
        <Route path='product_details'element={<ProductDetails/>} />
        <Route path='/cart' element={<Cart/>}/>
    </Routes>
  )
}

export default Routers