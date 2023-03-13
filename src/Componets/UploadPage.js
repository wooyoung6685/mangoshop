import React from 'react'
import './UploadPage.css'
import {
  Button,
  Form,
  Input,
  Upload,
  ConfigProvider,
  Divider,
  InputNumber,
} from 'antd';




function UploadPage() {
  const { TextArea } = Input;
  const onFinish = (val)=>{
    console.log(val);
  }
  return (
    <div id='upload-container'>
        <Form name='uploadForm' onFinish={onFinish}>
        <Form.Item name="upload">
          <div id='upload-img'>
            <img src='/images/icons/camera.png' alt=''/>
            <span>이미지를 업로드 해주세요</span>
          </div>
        </Form.Item>
        <Divider/>
        <Form.Item label={<span className='upload-label'>상품명</span>} name="product-name"rules={[{required: true, message: '상품명은 필수 입력사항입니다.'}]}>
          <Input className='upload-name' placeholder='상품명을 입력해주세요' size='large'/>
        </Form.Item>
        <Divider/>
        <Form.Item label={<span className='upload-label'>판매가</span>} name="product-price"rules={[{required: true, message: '판매가는 필수 입력사항입니다.'}]}>
      <InputNumber className='upload-price' size='large' min={0} defaultValue={0} />
      </Form.Item>
      <Divider/>
        <Form.Item label={<span className='upload-label'>상품설명</span>} name="product-description"rules={[{required: true, message: '상품설명은 필수 입력사항입니다.'}]}>
     <TextArea size='large' id='product-description' showCount maxLength={300} placeholder='상품설명을 작성해주세요'/>
      </Form.Item>
      <Divider/>
      <Form.Item>
					<Button id="submit-button" size="large" htmlType="submit">
						상품등록하기
					</Button>
				</Form.Item>
        </Form>
     
     </div>
  )
}

export default UploadPage