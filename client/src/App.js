import './App.css';
import CreateProductoForm from './components/ProductForm';
import ProductList from './components/ProductList';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ProductItem from './components/ProductItem';
import Main from './components/Main';
import ProductEdit from './components/ProductEdit';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>} >
            
          </Route>
          <Route path=':id' element={<ProductItem/>}/>
          <Route path='/product/:id/edit' element={<ProductEdit/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
