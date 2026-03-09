import { Router } from "express";
import { validateProduct } from "../validators/productValidator.js";

const router = Router();
const productsList = [];

router.get('/', (req, res) => {
    res.json(productsList);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    
    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    if (productsList[id] === undefined) {
        return res.status(404).send('ID não encontrado');
    }

    res.json(productsList[id]);
});

router.post('/', (req, res) => {
    const error = validateProduct(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    const { name, price, inStock, category } = req.body;
    const newProduct = { name, price, inStock, category };
    productsList.push(newProduct);
    res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const product = productsList[id];

    if (product === undefined) {
        return res.status(404).send('Produto não encontrado');
    }

    const error = validateProduct(req.body, { partial: true });
    if (error) {
        return res.status(400).send(error);
    }

    const { name, price, inStock, category } = req.body;

    if (name !== undefined) {
        product.name = name;
    }

    if (price !== undefined) {
        product.price = price;
    }

    if (inStock !== undefined) {
        product.inStock = inStock;
    }

    if (category !== undefined) {
        product.category = category;
    }

    res.status(200).json(product);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const product = productsList[id];
    if (product === undefined) {
        return res.status(404).send('Produto não encontrado');
    }

    const removedProduct = productsList.splice(id, 1);
    res.status(200).json(removedProduct[0]);
});

export { router };