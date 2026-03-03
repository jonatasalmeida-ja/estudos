import { Router } from "express";
import { validateProduct } from "../validators/productValidator.js";

const router = Router();
const products = [];

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (products[id] === undefined) {
        res.status(404);
        res.send('Produto não encontrado');
        return;
    }

    res.json(products[id]);
});

router.post('/', (req, res) => {
    const error = validateProduct(req.body);

    if (error) {
        res.status(400);
        res.send(error);
        return;
    }

    const { name, price, inStock } = req.body;
    const newProduct = { name, price, inStock };
    products.push(newProduct);
    res.status(201)
    res.json(newProduct);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products[id];

    if (product === undefined) {
        res.status(404);
        res.send('Produto não encontrado');
        return;
    }

    const error = validateProduct(req.body, { partial: true });

    if (error) {
        res.status(400);
        res.send(error);
        return;
    }

    const { name, price, inStock } = req.body;

    if (name !== undefined) {
        product.name = name;
    }

    if (price !== undefined) {
        product.price = price;
    }

    if (inStock !== undefined) {
        product.inStock = inStock;
    }

    res.status(200);
    res.json(product);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id)
    const product = products[id];

    if (product === undefined) {
        res.status(404);
        res.send('Produto não encontrado');
        return;
    }

    const removedProduct = products.splice(id, 1);

    res.status(200);
    res.json(removedProduct[0]);
});

export { router };