import React, { useState } from 'react'
import { createNewProduct } from '../actions/apiProduct';

const ProductForm = () => {

    const [product, setProduct] = useState({
        title: '',
        price: 0,
        description: ''
    })
    const valueHandler = (e) =>{
        setProduct({...product, [e.target.id]: e.target.value});
    }
    const submitHandler = (e) => {
        e.preventDefault();
        createNewProduct(product);
        
    }
  return (
    <div className='container'>
        <form onSubmit={submitHandler}>
            <div className="input-group flex-nowrap p-1">
                
                <input type="text" className="form-control" placeholder="Nombre producto" aria-label="Nombre producto" aria-describedby="addon-wrapping" id='title' onChange={valueHandler}/>
            </div>
            <div className="input-group flex-nowrap p-1">
                <span className="input-group-text">$</span>
                <input type="number" className="form-control" placeholder="Precio" aria-label="precio" aria-describedby="addon-wrapping" id='price' onChange={valueHandler}/>
            </div>
            <div className="input-group flex-nowrap p-1">
            
                <input type="text" className="form-control" placeholder="Descripción" aria-label="descripcion" aria-describedby="addon-wrapping" id='description' onChange={valueHandler}/>
            </div>
            
            
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    </div>
  )
}

export default ProductForm