import { Router } from "express";

const router = Router();
const songs = [];

router.get('/', (req, res) => {
    res.json(songs);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (songs[id] === undefined) {
        res.status(404).send('Música não encontrada');
        return;
    }

    res.json(songs[id]);
});

router.post('/', (req, res) => {
    const { title, artist, duration, released } = req.body;

    if (!title || !artist || duration === undefined || released === undefined) {
        res.status(400).send('Os campos título, artista, duração e lançamento são obrigatórios');
        return;
    }

    if (typeof title !== 'string' || typeof artist !== 'string' || typeof duration !== 'number' || typeof released !== 'boolean') {
        res.status(400).send('Tipo de dados inválidos');
        return;
    }

    const newSong = { title, artist, duration, released };
    songs.push(newSong);
    res.status(201).json(newSong);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const song = songs[id];

    if (!song) {
        res.status(404).send('Música não encontrada');
        return;
    }

    const { title, artist, duration, released } = req.body;

    if (title !== undefined && typeof title !== 'string') {
        res.status(400).send('Título inválido');
        return;
    }

    if (title !== undefined) {
        song.title = title;
    }

    if (artist !== undefined && typeof artist !== 'string') {
        res.status(400).send('Artista inválido');
        return;
    }

    if (artist !== undefined) {
        song.artist = artist;
    }

    if (duration !== undefined && typeof duration !== 'number') {
        res.status(400).send('Duração inválida');
        return;
    }

    if (duration !== undefined) {
        song.duration = duration;
    }

    if (released !== undefined && typeof released !== 'boolean') {
        res.status(400).send('Lançamento inválido');
        return;
    }

    if (released !== undefined) {
        song.released = released;
    }

    res.json(song);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const song = songs[id];

    if (!song) {
        res.status(404).send('Música não encontrada');
        return;
    }

    const removedSong = songs.splice(id, 1);

    res.json(removedSong[0]);
});

export { router };