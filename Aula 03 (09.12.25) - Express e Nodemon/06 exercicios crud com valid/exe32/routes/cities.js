import { Router } from "express";

const router = Router() // porque nao da para usar o "Router" direto?
const cities = [];

router.get('/', (req, res) => {
    res.json(cities);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (cities[id] === undefined) {
        res.status(404).send('Cidade não encontrada');
        return;
    }

    res.json(cities[id]);
});

router.post('/', (req, res) => {
    const { name, country, population, capital } = req.body;

    if (!name || !country || population === undefined || capital === undefined) {
        res.status(400).send('Os campos Nome, Cidade, População e Caital são obrigatórios'); // Anotar descrição dos erros 400 e 404
        return;
    }

    if (typeof name !== 'string' || typeof country !== 'string' || typeof population !== 'number' || typeof capital !== 'boolean') {
        res.status(400).send('Tipos de dados inválidos');
        return;
    }

    const newCity = { name, country, population, capital };
    cities.push(newCity);
    res.status(201).json(newCity);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const city = cities[id];

    if (!city) {
        res.status(404).send('Cidade não encontrada');
        return;
    }

    const { name, country, population, capital } = req.body;

    if (name !== undefined && typeof name !== 'string') {
        res.status(400).send('Nome inválido');
        return;
    }

    if (name !== undefined) {
        city.name = name;
    }

    if (country !== undefined && typeof country !== 'string') {
        res.status(400).send('Cidade inválida');
        return;
    }

    if (country !== undefined) {
        city.country = country;
    }

    if (population !== undefined && typeof population !== 'number') {
        res.status(400).send('População inválida');
        return;
    }

    if (population !== undefined) {
        city.population = population;
    }

    if (capital !== undefined && typeof capital !== 'boolean') {
        res.status(400).send('Capital inválida');
        return;
    }

    if (capital !== undefined) {
        city.capital = capital;
    }

    res.status(200).json(city);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const city = cities[id];

    if (!city) {
        res.status(404).send('Cidade não encontrada');
        return;
    }

    const removedCity = cities.splice(id, 1);

    res.status(200).json(removedCity[0]);
});

export { router };