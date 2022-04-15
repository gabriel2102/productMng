import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { editProductById, getProductById } from '../actions/apiProduct';

const ProductEdit = () => {
    const {id} = useParams();
    const nav  = useNavigate();
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
        editProductById(product._id, product);
        nav('/')
    }
    const getProduct = async () => {
        const res = await getProductById(id);
        setProduct(res.data);
        
    }
    useEffect(() => {
        getProduct();
    }, [])
    const back = () => {
        nav('/')
    }
  return (
    <div className='container'>
        <form onSubmit={submitHandler}>
            <div className="input-group flex-nowrap p-1">
                
                <input type="text" className="form-control" placeholder="Nombre producto" aria-label="Nombre producto" aria-describedby="addon-wrapping" id='title' onChange={valueHandler} value={product.title}/>
            </div>
            <div className="input-group flex-nowrap p-1">
                <span className="input-group-text">$</span>
                <input type="number" className="form-control" placeholder="Precio" aria-label="precio" aria-describedby="addon-wrapping" id='price' onChange={valueHandler} value={product.price}/>
            </div>
            <div className="input-group flex-nowrap p-1">
            
                <input type="text" className="form-control" placeholder="Descripción" aria-label="descripcion" aria-describedby="addon-wrapping" id='description' onChange={valueHandler} value={product.description}/>
            </div>
            
            <button type="button" className="btn btn-light m-1" onClick={back}>Volver al inicio</button>
            <button type="submit" className="btn btn-primary m-1">Editar</button>
        </form>
    </div>
  )
}

export default ProductEdit