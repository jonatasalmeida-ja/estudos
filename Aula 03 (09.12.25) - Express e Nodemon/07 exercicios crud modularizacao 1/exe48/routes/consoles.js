import { Router } from "express";
import { validateConsole } from "../validators/consoleValidator.js";

const router = Router();
const consolesList = [];

router.get('/', (req, res) => {
    res.json(consolesList);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    if (consolesList[id] === undefined) {
        return res.status(404).send('Console não encontrado');
    }

    return res.json(consolesList[id]);
});

router.post('/', (req, res) => {
    const error = validateConsole(req.body);

    if (error) {
        return res.status(400).send(error);
    }

    const { name, brand, releaseYear, portable, website } = req.body;
    const newConsole = { name, brand, releaseYear, portable, website};
    consolesList.push(newConsole);
    return res.status(201).json(newConsole);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const console = consolesList[id];
    if (console === undefined) {
        return res.status(404).send('Console não encontrado');
    }

    const error = validateConsole(req.body, { partial: true });
    if (error) {
        return res.status(400).send(error);
    }

    const { name, brand, releaseYear, portable, website } = req.body

    if (name !== undefined) {
        console.name = name;
    }

    if (brand !== undefined) {
        console.brand = brand;
    }

    if (releaseYear !== undefined) {
        console.releaseYear = releaseYear;
    }

    if (portable !== undefined) {
        console.portable = portable;
    }

    if (website !== undefined) {
        console.website = website;
    }

    return res.status(200).json(console);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (Number.isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const console = consolesList[id];
    if (console === undefined) {
        return res.status(404).send('Console não encontrado');
    }

    const removedConsole = consolesList.splice(id, 1);

    return res.status(200).json(removedConsole[0]);
});

export { router };