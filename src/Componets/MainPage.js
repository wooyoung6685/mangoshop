import React, { useState, useEffect } from "react";
import "./MainPage.css";
import axios from "axios";
import {Link} from 'react-router-dom'



function MainPage() {

  const [products,setProducts] = useState([]);
  useEffect(() => {
		axios
			.get("https://1db06c34-148b-44ed-b0c3-fe9eba373c88.mock.pstmn.io/products/")
			.then((result) => {
				const products = result.data.products;
				setProducts(products);
			})
			.catch((error) => {
        console.log(error);
			});
    }, []);
  return (
    <div>
      <div id="body">
        <div id="banner">
          <img src="images/banners/banner1.png" alt="" />
        </div>
        <h1>Products</h1>
        <div id="product-list">
          {products.map((product,idx)=>{
            return(
        <div className="product-card" key={idx}>
      <Link className="product-link" to={`/productPage/${product.id}`}>
        <div><img className="product-img" src={product.imageUrl} alt={product.name} /></div>
        <div className="product-content">
          <span className="product-name">{product.name}</span>
          <span className="product-price">{product.price}</span>
          <span className="product-seller">
            <img src="images/icons/avatar.png" className="product-avatar" alt="" />
            <span>{product.seller}</span>
          </span>
        </div>
      </Link>
    </div>
  );
  })}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
