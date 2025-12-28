import { Router } from "express";

const router = Router();

router.get('/', (req, res, id) => {
    res.send('Listando produtos');
});

router.get('/:id', (req, res, id) => {
    res.send(`Buscando produto com ID ${req.params.id}`);
});

export { router };