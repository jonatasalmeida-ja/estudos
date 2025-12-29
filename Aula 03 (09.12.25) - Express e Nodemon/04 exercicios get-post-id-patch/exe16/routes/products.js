import { Router } from "express";

const router = Router();
const products = [];

router.get('/', (req, res) => {
    res.send(products);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (products[id] === undefined) {
        res.send('Produto não encontrado');
        return
    };

    res.json(products[id]);
});

router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
})

router.patch('/:id', (req, res) => {
    const id= req.params.id;
    const product = products[id];

    if (!product) {
        res.status(404).send('Produto não encontrado');
        return
    };

    if (req.body.price !== undefined) {
        product.price = req.body.price
    };

    res.json(product);
});

export { router };