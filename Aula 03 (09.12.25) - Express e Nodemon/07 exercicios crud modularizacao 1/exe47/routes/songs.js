import { Router } from "express";
import { validateSong } from "../validators/songValidator.js";

const router = Router();
const songsList = [];

router.get('/', (req, res) => {
    return res.json(songsList);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.send('ID inválido');
    }

    if (songsList[id] === undefined) {
        return res.status(404).send('Música não encontrada');
    }

    return res.json(songsList[id]);
});

router.post('/', (req, res) => {
    const error = validateSong(req.body);

    if (error) {
        return res.status(400).send(error);
    }

    const { title, artist, duration, released, profile } = req.body;
    const newSong = { title, artist, duration, released, profile };
    songsList.push(newSong);
    return res.status(201).json(newSong);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const song = songsList[id];
    if (song === undefined) {
        return res.status(404).send('Música não encontrada');
    }

    const error = validateSong(req.body, { partial: true });
    if (error) {
        return res.status(400).send(error);
    }

    const { title, artist, duration, released, profile } = req.body;

    if (title !== undefined) {
        song.title = title;
    }

    if (artist !== undefined) {
        song.artist = artist;
    }

    if (duration !== undefined) {
        song.duration = duration;
    }

    if (released !== undefined) {
        song.released = released;
    }

    if (profile !== undefined) {
        song.profile = profile;
    }

    return res.status(200).json(song);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const song = songsList[id];
    if (song === undefined) {
        return res.status(404).send('Música não encontrada');
    }

    const removedSong = songsList.splice(id, 1);

    return res.status(200).json(removedSong[0]);
});

export { router };