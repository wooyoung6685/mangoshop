import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { API_URL } from "../config/constants.js";
import { Button, message } from "antd";
import axios from "axios";
import "./ProductPage.css";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const getProducts = () => {
    axios
      .get(`${API_URL}/products/${id}`)
      .then((result) => {
        console.log(result);
        setProduct(result.data.product);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getProducts();
  }, []);

  if (product == null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }

  const onClickPurchase = () => {
    let url = `${API_URL}/purchase/${id}`;
    axios
      .post(url)
      .then((result) => {
        message.success("결재가 완료 되었습니다.");
        getProducts();
        navigate(-1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <button
        onClick={() => {
          navigate(-1);
        }}
        id="back-btn"
      >
        뒤로
      </button>
      <div id="image-box">
        <img src={`${API_URL}/${product.imageUrl}`} alt={product.name} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" alt={product.seller} />
        <span className="product-seller">{product.seller}</span>
      </div>
      <div className="content-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div className="product-date">상품등록일: {dayjs(product.createdAt).format("YY년MM월DD일-hh시MM분ss초")}</div>
        <Button size="large" type="primary" danger={true} className="payment" onClick={onClickPurchase} disabled={product.soldout === 1}>
          즉시결제하기
        </Button>
        <pre id="description">{product.description}</pre>
      </div>
    </div>
  );
};
export default ProductPage;
