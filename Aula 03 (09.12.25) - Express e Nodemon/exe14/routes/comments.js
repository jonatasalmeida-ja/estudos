import { Router } from "express";

const router = Router();
const comments = [];

router.get('/', (req, res) => {
    res.send(comments);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (comments[id] === undefined) {
        res.status(404).send('Comentário não encontrado')
        return
    }

    res.json(comments[id]);
});

router.post('/', (req, res) => {
    const newComments = req.body;
    comments.push(newComments);
    res.json(newComments);
});

export { router };