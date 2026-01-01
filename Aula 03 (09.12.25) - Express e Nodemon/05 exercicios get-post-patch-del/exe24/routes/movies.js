import { Router } from "express";

const router = Router();
const movies = [];

router.get('/', (req, res) => {
    res.json(movies);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (movies[id] === undefined) {
        res.status(404).send('Filme não encontrado');
        return
    }

    res.json(movies[id]);
});

router.post('/', (req, res) => {
    const newMovie = req.body;
    movies.push(newMovie);
    res.json(newMovie);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = movies[id];

    if (!movie) {
        res.status(404).send('Nenhuma alterção será feita, filme não encontrado');
        return
    }

    if (req.body.title !== undefined) {
        movie.title = req.body.title;
    }

    if (req.body.year !== undefined) {
        movie.year = req.body.year;
    }

    if (req.body.genre !== undefined) {
        movie.genre = req.body.genre;
    }

    if (req.body.rating !== undefined) {
        movie.rating = req.body.rating;
    }

    res.json(movie);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const movie = movies[id];

    if (!movie) {
        res.status(404).send('Nenhuma remoção será feita, filme não encontrado');
        return
    }

    const removedMovies = movies.splice(id, 1);

    res.json(removedMovies[0]);
});

export { router };