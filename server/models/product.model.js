const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Este campo es obligatorio'],
        minlength: [3, 'Este campo debe contener mínimo 3 caracteres']
    },
    price:{
        type: Number,
        required: [true, 'Este campo es obligatorio'],
        minlength: [1, 'Este campo de contener mínimo 1 caracter']
    },
    description: {
        type: String
    }
}, {timestamps: true});

const Product = model('Product', ProductSchema);

module.exports = Product;