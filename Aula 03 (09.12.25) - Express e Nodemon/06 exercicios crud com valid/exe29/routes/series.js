import { Router } from "express";

const router = Router();
const series = [];

router.get('/', (req, res) => {
    res.json(series);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (series[id] === undefined) {
        res.status(404).send('Série não encontrada');
        return;
    }

    res.json(series[id]);
});

router.post('/', (req, res) => {
    const { title, seasons, genre, finished } = req.body

    if (!title || seasons === undefined || !genre || finished === undefined) {
        res.status(400).send('Os campos Título, Temporada, Gênero e Finalizado são obrigatórios');
        return;
    }

    if (typeof title !== 'string' || typeof seasons !== 'number' || typeof genre !== 'string' || typeof finished !== 'boolean') {
        res.status(400).send('Tipos de dados inválidos');
        return;
    }

    const newSerie = { title, seasons, genre, finished };
    series.push(newSerie);
    res.status(201).json(newSerie);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const serie = series[id];

    if (!serie) {
        res.status(404).send('Série não encontrada');
        return;
    }

    const { title, seasons, genre, finished } = req.body

    if (title !== undefined && typeof title !== 'string') {
        res.status(400).send('Título inválido');
        return;
    }

    if (title !== undefined) {
        serie.title = title;
    }

    if (seasons !== undefined && typeof seasons !== 'number') {
        res.status(400).send('Temporada inválida');
        return;
    }

    if (seasons !== undefined) {
        serie.seasons = seasons;
    }

    if (genre !== undefined && typeof genre !== 'string') {
        res.status(400).send('Gênero inválido');
        return;
    }

    if (genre !== undefined) {
        serie.genre = genre;
    }

    if (finished !== undefined && typeof finished !== 'boolean') {
        res.status(400).send('Informação de Finalizado inválida');
        return;
    }

    if (finished !== undefined) {
        serie.finished = finished;
    }
    
    res.json(serie);
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const serie = series[id];

    if (!serie) {
        res.status(404).send('Serie não encontrada');
        return;
    }

    const removedSerie = series.splice(id, 1);

    res.json(removedSerie[0]);
});

export { router };