import { Router } from "express";
import { validateEbook } from "../validators/ebookValidator.js";
import { pool } from "../database/connection.js";

const router = Router();
const ebooks = [];

router.get('/', async (req, res) => {
    const [rows] = await pool.query('SELECT * FROM ebooks');
    res.json(rows);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (ebooks[id] === undefined) {
        res.status(404).send('Ebook não encontrado');
        return;
    }

    res.json(ebooks[id]);
});

router.post('/', async (req, res) => {
    const error = validateEbook(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, author, year, pages } = req.body;

    const [result] = await pool.query(
        'INSERT INTO ebooks (title, author, year, pages) VALUES (?, ?, ?, ?)',
        [title, author, year, pages]
    );

    res.status(201).json({
        id: result.insertId,
        title,
        author,
        year,
        pages
    });
});

router.patch('/:id', async (req, res) => {
    const id = Number(req.params.id);

    const error = validateEbook(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, author, pages, available } = req.body;
    const [result] = await pool.query(
        'UPDATE ebooks SET title = ? WHERE id = ?',
        [title, id]
    );

    if (result.affectedRows === 0) {
        res.status(404).send('Ebook não encontrado');
        return;
    }

    res.sendStatus(204);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const ebook = ebooks[id];

    if (!id) {
        res.status(404).send('Ebook não encontrado');
        return;
    }

    const removedEbook = ebooks.splice(id, 1);

    res.status(200).json(removedEbook[0]);
});

export { router };