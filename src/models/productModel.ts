// src/models/productModel.ts
import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  name: { type: String, required: true },
  endereco: { type: String, required: true },
  numero: { type: String, required: true },
  cep: { type: String, required: true },
});

const ProductModel = model('Product', productSchema);

export default ProductModel;
