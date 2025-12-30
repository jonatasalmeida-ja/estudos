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
        return
    }

    res.json(products[id]);
});

router.post('/', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.json(newProduct);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products[id];

    if (!product) {
        res.status(404).send('Nenhuma atualização será feita, produto não encontrado');
        return
    }

    if (req.body.name !== undefined) {
        product.name = req.body.name;
    }

    if (req.body.price !== undefined) {
        product.price = req.body.price;
    }

    if (req.body.status !== undefined) {
        product.status = req.body.status;
    }

    res.json(product);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products[id]

    if (!product) {
        res.status(404).send('Nenhuma produto será removido, produto não encontrado');
        return
    }

    const removedProduct = products.splice(id, 1);

    res.json(removedProduct);
});

export { router };