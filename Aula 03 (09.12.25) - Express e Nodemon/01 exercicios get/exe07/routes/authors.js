import { Router } from 'express';

const router = Router();

router.get('/', (req, res, id) => {
    res.send('Listando autores')
});

router.get('/:id', (req, res, id) => {
    res.send(`Buscando autor com ID ${req.params.id}`)
});

export { router };