import React from 'react'
import './ProductPage.css'
import {useParams,useNavigate} from 'react-router-dom'
import "./MainPage.css";
import axios from 'axios';
import { useState, useEffect } from 'react';

function ProductPage() {
  const navigate = useNavigate();
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
		axios
			.get(`https://1db06c34-148b-44ed-b0c3-fe9eba373c88.mock.pstmn.io/products/${id}`)
			.then((result) => {
				setProduct(result.data);
			})
			.catch((error) => {
        console.log(error);
			});
    }, []);
if(product === null){
  return <h1>상품정보를 받고 있습니다..</h1>
}
  return (
    <>
      <button onClick={()=>{
        navigate("/")
      }}>홈으로가기
      </button>
      <div id='image-box'><img src={`/${product.imageUrl}`} alt={product.name}/></div>
      <div id='profile-box'>
        <img src='/images/icons/avatar.png' alt={product.seller}/>
        <span className='product-seller'>{product.seller}</span>
      </div>
      <div>
        <div id='name'>{product.name}</div>
        <div id='price'>{product.price}</div>
        <div id='createAt'>2023.03.10</div>
        <div id='description'>{product.desc}</div>
      </div>
    </>
  )
}

export default ProductPage