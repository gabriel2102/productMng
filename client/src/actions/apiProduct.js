const axios = require('axios');

const baseURL = 'http://localhost:8000/api/';

const getAllProductsApi = async () =>{
    try {
        const res = await axios.get(baseURL+'products');
        return res.data;
    } catch (error) {
        return error;
    }
}
const getProductById = async (id) => {
    try {
        const res = await axios.get(baseURL+`product/${id}`);
        return res;
    } catch (error) {
        return error
    }
}
const createNewProduct = async (product) => {
    try {
        const res = await axios.post(baseURL+'product/new', {product});
        return res;
    } catch (err) {
        return err;
    }
}

const editProductById = async (id,product) => {
    try {
        const res = await axios.put(baseURL+`product/${id}/edit`, {product});
        return res;
    }catch(err){
        return err;
    }
}

const deleteProductById = async (id) => {
    try {
        const res = await axios.delete(baseURL+`product/${id}/delete`);
        return res;
    } catch (error) {
        return error;
    }
}

module.exports = {
    createNewProduct,
    getAllProductsApi,
    getProductById,
    editProductById,
    deleteProductById
}

