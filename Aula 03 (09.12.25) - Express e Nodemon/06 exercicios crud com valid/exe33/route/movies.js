import { Router } from "express";
import { validateMovie } from "../validators/movieValidator.js";

const router = Router();
const movies = []

router.get('/', (req, res) => {
    res.json(movies);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (movies[id] === undefined) {
        res.status(404).send('Filme não encontrada');
        return;
    }

    res.json(movies[id]);
})

router.post('/', (req, res) => {
    const error = validateMovie(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const newMovie = req.body
    movies.push(newMovie);
    res.status(201).json(newMovie);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = movies[id]

    if (!movie) {
        res.status(404).send('Filme não encontrada');
        return;
    }

    const error = validateMovie(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, year, duration, watched } = req.body;

    if (title !== undefined) {
        movie.title = title;
    }

    if (year !== undefined) {
        movie.year = year;
    }

    if (duration !== undefined) {
        movie.duration = duration;
    }

    if (watched !== undefined) {
        movie.watched = watched;
    }

    res.status(200).json(movie);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = movies[id]

    if (!movie) {
        res.status(404).send('Filme não encontrado');
        return;
    }

    const removedMovie = movies.splice(id, 1);
    res.status(200).json(removedMovie[0]);
})
    
export { router };