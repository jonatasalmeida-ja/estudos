import { Router } from "express";
import { validateBook } from "../validators/bookValidator.js";

const router = Router();
const booksList = [];

router.get('/', (req, res) => {
    res.json(booksList);
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    if (booksList[id] === undefined) {
        return res.status(404).send('Livro não encontrado');
    }

    res.json(booksList[id]);
})

router.post('/', (req, res) => {
    const error = validateBook(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    const { title, pages, available, genre } = req.body;
    const newBook = { title, pages, available, genre };
    booksList.push(newBook);
    res.status(201).json(newBook);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const book = booksList[id];
    if (book === undefined) {
        return res.status(404).send('Livro não encontrado');
    }

    const error = validateBook(req.body, { partial: true });
    if (error) {
        return res.status(400).send(error);
    }

    const { title, pages, available, genre } = req.body;

    if (title !== undefined) {
        book.title = title;
    }

    if (pages !== undefined) {
        book.pages = pages;
    }

    if (available !== undefined) {
        book.available = available;
    }

    if (genre !== undefined) {
        book.genre = genre;
    }

    res.status(200).json(book);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const book = booksList[id];
    if (book === undefined) {
        return res.status(404).send('Livro não encontrado');
    }

    const removedBook = booksList.splice(id, 1);
    res.status(200).json(removedBook[0]);
});

export { router };