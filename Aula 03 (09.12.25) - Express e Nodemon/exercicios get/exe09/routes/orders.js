import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Listando pedidos');
});

router.get('/:id', (req, res) => {
    res.send(`Buscando pedido com ID ${req.params.id}`);
});

export { router };