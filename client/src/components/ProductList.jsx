import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { deleteProductById, getAllProductsApi } from '../actions/apiProduct'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    const res = await getAllProductsApi();
    setProducts(res);
    
  } 
  const deleteProduct = async (id) => {
      await deleteProductById(id);
  }
useEffect(() => {
    getAllProducts();
}, [])
  const deleteHandler = (id) => {
    deleteProduct(id);
    setProducts(products.filter(product=>product._id !== id))
  }
return (
    <div className='container'>
        
            {
                products && products.map((product, i) => {
                    return (
                        
                            <div key={i} className='card m-1 d-inline-flex'>
                                <div className='card-header'>
                                    <Link to={`${product._id}`} >
                                        <p className="h2">{product.title}</p>
                                    </Link>
                                </div>
                                <div className='card-body m-1'>
                                    <Link to={`/product/${product._id}/edit`} className='btn btn-success m-1'><i className="bi bi-pencil-square"></i> Editar</Link>
                                    <button className='btn btn-outline-danger m-1' onClick={()=>deleteHandler(product._id)}><i className="bi bi-trash"></i> Eliminar</button>
                                </div>
                            </div>
                            
                        
                    )
                })
            }
            
        
    </div>
  )
}

export default ProductList
