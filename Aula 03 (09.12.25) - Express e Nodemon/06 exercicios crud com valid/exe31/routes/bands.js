import { Router } from "express";

const router = Router();
const bands = [];

router.get('/', (req, res) => {
    res.json(bands);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (bands[id] === undefined) {
        res.status(404).send('Banda não encontrada');
        return;
    }

    res.json(bands[id]);
});

router.post('/', (req, res) => {
    const { name, genre, members, active } = req.body;

    if (!name || !genre || members === undefined || active === undefined) {
        res.status(400).send('Os campos Nome, Gênero, Membros e Ativos são obrigatórios');
        return;
    }

    if (typeof name !== 'string' || typeof genre !== 'string' || typeof members !== 'number' || typeof active !== 'boolean') {
        res.status(400).send('Tipo de dados inválidos');
        return;
    }

    const newBand = { name, genre, members, active };
    bands.push(newBand);
    res.status(201).json(newBand);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const band = bands[id];

    if (!band) {
        res.status(404).send('Banda não encontrada');
        return;
    }

    const { name, genre, members, active } = req.body;

    if (name !== undefined && typeof name !== 'string') {
        res.status(400).send('Nome inválido');
        return;
    }

    if (name !== undefined) {
        band.name = name;
    }

    if (genre !== undefined && typeof genre !== 'string') {
        res.status(400).send('Gênero inválido');
        return;
    }

    if (genre !== undefined) {
        band.genre = genre;
    }

    if (members !== undefined && typeof members !== 'number') {
        res.status(400).send('Membro inválido');
        return;
    }

    if (members !== undefined) {
        band.members = members;
    }

    if (active !== undefined && typeof active !== 'boolean') {
        res.status(400).send('Informação de atividade inválida');
        return;
    }

    if (active !== undefined) {
        band.active = active;
    }

    res.status(200).json(band);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const band = bands[id];

    if (!band) {
        res.status(404).send('Banda não encontrada');
        return;
    }

    const removedBand = bands.splice(id, 1);

    res.status(200).json(removedBand[0]);
})

export { router };