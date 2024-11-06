import React, { useState } from 'react';

const ProductForm = () => {
  const [image, setImage] = useState(null);
  const [productTitle, setProductTitle] = useState('');
  const [price, setPrice] = useState('');
console.log(image)
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('image', image);
    formData.append('product_title', productTitle);
    formData.append('price', price);

    fetch('http://localhost:4000/api/products', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="image"
        onChange={(event) => setImage(event.target.files[0])}
      />
      <input
        type="text"
        name="product_title"
        value={productTitle}
        onChange={(event) => setProductTitle(event.target.value)}
      />
      <input
        type="number"
        name="price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ProductForm;