import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.send('Listando livros')
})

router.get('/:id', (req, res) => {
    res.send(`Buscando livro com ID ${req.params.id}`)
})

export { router }