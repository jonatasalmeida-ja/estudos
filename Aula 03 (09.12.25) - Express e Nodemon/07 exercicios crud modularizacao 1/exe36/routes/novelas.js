import { Router } from "express";
import { validateNovela } from "../validator/novelaValidator.js";

const router = Router();
const novelas = [];

router.get('/', (req, res) => { 
    res.json(novelas);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (novelas[id] === undefined) {
        res.status(404).send('Novela não encontrada');
        return;
    }

    res.json(novelas[id]);
})

router.post('/', (req, res) => {
    const error = validateNovela(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, episodes, network, finished } = req.body
    
    const newNovela = { title, episodes, network, finished };
    novelas.push(newNovela);
    res.status(201).json(newNovela);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const novela = novelas[id];

    if (!novela) {
        res.status(404).send('Novela não encontrada');
        return;
    }

    const error = validateNovela(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, episodes, network, finished } = req.body;

    if (title !== undefined) {
        novela.title = title;
    }

    if (episodes !== undefined) {
        novela.episodes = episodes;
    }

    if (network !== undefined) {
        novela.network = network;
    }

    if (finished !== undefined) {
        novela.finished = finished;
    }

    res.status(200).json(novela);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const novela = novelas[id];

    if (!novela) {
        res.status(404).send('Novela não encontrada');
        return;
    }

    const removedNovela = novelas.splice(id, 1);

    res.status(200).json(removedNovela[0]);
});

export { router }; 