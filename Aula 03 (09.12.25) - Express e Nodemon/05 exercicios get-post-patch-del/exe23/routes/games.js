import { Router } from "express";

const router = Router();
const games = [];

router.get('/', (req, res) => {
    res.json(games);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (games[id] === undefined) {
        res.status(404).send('Game não encontrado');
        return
    }

    res.json(games[id]);
});

router.post('/', (req, res) => {
    const newGame = req.body;
    games.push(newGame);
    res.json(newGame);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const game = games[id];

    if (!game) {
        res.status(404).send('Nenhuma atualização feita, game não encontrado');
        return
    }

    if (req.body.title !== undefined) {
        game.title = req.body.title;
    }

    if (req.body.platform !== undefined) {
        game.platform = req.body.platform;
    }

    if (req.body.price !== undefined) {
        game.price = req.body.price;
    }

    if (req.body.status !== undefined) {
        game.status = req.body.status;
    }

    res.json(game);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const game = games[id];

    if (!game) {
        res.status(404).send('Nenhuma remoção feita, game não encontrado')
        return
    }

    const removedGame = games.splice(id, 1);

    res.json(removedGame[0]);
});

export { router };