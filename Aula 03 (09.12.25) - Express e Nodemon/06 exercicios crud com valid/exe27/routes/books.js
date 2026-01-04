import { Router } from "express";

const router = Router();
const books = [];

router.get('/', (req, res) => {
    res.json(books);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (books[id] === undefined) {
        res.status(404).send('Livro não encontrado');
        return;
    }

    res.json(books[id]);
});

router.post('/', (req, res) => {
    const { title, author, pages, available } = req.body;

    if (!title || !author || pages === undefined || available === undefined) {
        res.status(400).send('O campos "Título, autor, páginae avaliação" são obrigatórios');
        return;
    }

    if (typeof title !== 'string' || typeof author !== 'string' || typeof pages !== 'number' || typeof pages !== 'boolean') {
        res.status(400).send('Tipos de dados inválidos');
        return;
    }

    const newBook = { title, author, pages, available };
    books.push(newBook);
    res.status(201).json(newBook);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const book = books[id];

    if (!book) {
        res.status(404).send('Livro não encontrado');
        return;
    }

    const { title, author, pages, available } = req.body;

    if (title !== undefined && typeof title !== 'string') {
        res.status(400).send('Título inválido');
        return;
    }

    if (author !== undefined && typeof author !== 'string') {
        res.status(400).send('Autor inválido');
        return;
    }

    if (pages !== undefined && typeof pages !== 'number') {
        res.status(400).send('Número de páginas inválido');
        return;
    }

    if (available !== undefined && typeof available !== 'boolean') {
        res.status(400).send('Avaliação inválida');
        return;
    }

    if (title !== undefined) {
        book.title = title;
    }

    if (author !== undefined) {
        book.author = author;
    }

    if (pages !== undefined) {
        book.pages = pages;
    }

    if (available !== undefined) {
        book.available = available;
    }

    res.json(book);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const book = books[id]

    if (!book) {
        res.status(404).send('Livro não encontrado');
        return;
    }

    const removedBook = books.splice(id, 1);

    res.status(201).json(removedBook[0]);
});

export { router };