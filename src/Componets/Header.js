import React from 'react'
import "./MainPage.css";
import { useNavigate, Link } from "react-router-dom";
import { Button } from 'antd';
import {
  UploadOutlined
} from '@ant-design/icons';

function Header() {
    const navigate = useNavigate();

  return (
    <div>
    <div id="header">
    <div id="header-area">
      <Link to="/">
        <img src="../images/icons/logo.png" alt="" />
      </Link>
      <Button icon={<UploadOutlined />}size='large' onClick={()=>{
        navigate("/UploadPage");
      }}>상품 업로드</Button>
    </div>
  </div>
    </div>
  )
}

export default Header