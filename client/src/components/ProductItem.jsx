import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteProductById, getProductById } from '../actions/apiProduct';

const ProductItem = () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const back = useNavigate();
    const getProduct = async () => {
        const res = await getProductById(id);
        setProduct(res.data)
    }
    const deleteProduct = async () => {
        await deleteProductById(id);
        back('/');
    }
    useEffect(() => {
        getProduct();
    }, [])
    const backHandler = () => {
        back('/');
    }
    const deleteHandler = () => {
        deleteProduct();
    }
  return (
    <div>
        <div className="card p-5">
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{product.price}</h6>
                <p className="card-text">{product.description}</p>
                <button className='btn btn-light' onClick={backHandler}>Volver a página principal</button>
                <button className='btn btn-outline-danger' onClick={deleteHandler}>Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default ProductItem