import React from 'react'
import Product from '../product'
import './style.css'
// import { useSelector } from 'react-redux'

const PopularProduct = ({ text, num, items }) => {
  // const products = useSelector(state => state.products.allProducts);
  // const mensItem = products.filter(product => product.type === "mens");
  // const womensItem = products.filter(product => product.type === "womens");
  // const kidsItem = products.filter(product => product.type === "kids");

  // let items = [];

  // if (type === 'mens') {
  //   items = mensItem;
  // } else if (type === 'womens') {
  //   items = womensItem;
  // } else {
  //   items = kidsItem;
  // }

  if (!num || num > items.length) {
    num = items.length;
  }

  return (
    <div className='popular_product'>
      <h1>{text} <hr /></h1>
      <div>
        {items.slice(0, num).map((item, index) => (
          <Product ProductData={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};
export default PopularProduct