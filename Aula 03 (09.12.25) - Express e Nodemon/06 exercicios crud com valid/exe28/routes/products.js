import { Router } from "express";

const router = Router();
const products = [];

router.get('/', (req, res) => {
    res.json(products);
});

router.get('/:id', (req, res) => { 
    const id = Number(req.params.id);

    if (products[id] === undefined) {
        res.status(404).send('Produto não encontrado');
        return;
    }

    res.json(products[id]);
});

router.post('/', (req, res) => {
    const { name, price, category, inStock } = req.body;

    if (!name || price === undefined || !category || inStock === undefined) {
        res.status(400).send('Os campos Nome, Preço, Categoria e Em estoque são obrigatórios');
        return;
    }

    if (typeof name !== 'string' || typeof price !== 'number' || typeof category !== 'string' || typeof inStock !== 'boolean') {
        res.status(400).send('Tipod de Dados inválidos');
        return;
    }

    const newProduct = { name, price, category, inStock };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products[id];

    if (!product) {
        res.status(404).send('Produto não encontrado');
        return;
    }

    const { name, price, category, inStock } = req.body;

    if (name !== undefined && typeof name !== 'string') {
        res.status(400).send('Nome inválido');
        return;
    }

    if (name !== undefined) {
        product.name = name;
    }

    if (price !== undefined && typeof price !== 'number') {
        res.status(400).send('Preço inválido');
        return;
    }

    if (price !== undefined) {
        product.price = price;
    }

    if (category !== undefined && typeof category !== 'string') {
        res.status(400).send('Categoria inválida');
        return;
    }

    if (category !== undefined) {
        product.category = category;
    }

    if (inStock !== undefined && typeof inStock !== 'boolean') {
        res.status(400).send('Informação de estoque inválida');
        return;
    }

    if (inStock !== undefined) {
        product.inStock = inStock;
    }

    res.json(product);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products[id];

    if (!product) {
        res.status(404).send('Produto não encontrado');
        return;
    }

    const removedProduct = products.splice(id, 1);

    res.json(removedProduct[0]);
});

export { router };