import { Router } from "express";
import { validadeGame } from "../validators/gameValidator.js";

const router = Router();
const games = [];

router.get('/', (req, res) => {
    res.json(games);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (games[id] === undefined) {
        res.status(404).send('Game não encontrado');
        return;
    }

    res.json(games[id]);
});

router.post('/', (req, res) => {
    const error = validadeGame(req.body)

    if (error) {
        res.status(400).send(error) // entender a lógica dos "error"
        return;
    }

    const newGame = req.body;
    games.push(newGame);
    res.status(201).json(newGame);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const game = games[id];

    if (!game) {
        res.status(404).send('Game não encontrado');
        return;
    }

    const error = validadeGame(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, plataform, price, online } = req.body;

    if (title !== undefined) {
        game.title = title;
    }

    if (plataform !== undefined) {
        game.plataform = plataform;
    }

    if (price !== undefined) {
        game.price = price;
    }

    if (online !== undefined) {
        game.online = online;
    }

    res.status(200).json(game);
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const game = games[id];

    if (!game) {
        res.status(404).send('Game não encontrado');
        return;
    }

    const removedGame = games.splice(id, 1);

    res.status(200).json(removedGame[0]);
});

export { router };