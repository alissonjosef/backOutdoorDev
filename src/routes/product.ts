// src/routes/product.ts
import { Router } from 'express';
/* import { authMiddleware } from '../middleware/authMiddleware'; */
import ProductModel from '../models/productModel';

const router = Router();

// Aplica o middleware de autenticação somente nas rotas de produtos
/* router.use(authMiddleware); */

router.get('/product', async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.json(products);
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    res.status(500).json({ error: 'Erro ao buscar produtos' });
  }
});

router.post('/createProduct', async (req, res) => {
  try {
    const { name, endereco, numero, cep } = req.body;

    const newProduct = new ProductModel({
      name,
      endereco,
      numero,
      cep,
    });

    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Erro ao criar produto:', error);
    res.status(500).json({ error: 'Erro ao criar produto' });
  }
});

export default router;
