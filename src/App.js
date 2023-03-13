import 'antd/dist/reset.css';
import {Routes,Route}from 'react-router-dom';
import Footer from './Componets/Footer';
import Header from './Componets/Header';
import MainPage from './Componets/MainPage';
import ProductPage from './Componets/ProductPage';
import UploadPage from './Componets/UploadPage';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/ProductPage/:id' element={<ProductPage/>}></Route>
        <Route path='/UploadPage' element={<UploadPage/>}></Route>
      </Routes>
      <Footer/>
      
    </div>
  );
}

export default App;
