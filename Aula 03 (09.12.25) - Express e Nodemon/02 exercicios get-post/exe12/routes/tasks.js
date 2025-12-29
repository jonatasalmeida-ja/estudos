import { Router } from "express";

const router = Router();
const tasks = [];

router.get('/', (req, res) => {
    res.send(tasks);
});

router.get('/:id', (req, res) => {
    const { id } = req.params;

    if (tasks[id] === undefined) {
        res.status(404).send('Tarefa não encontrada');
        return
    };

    res.json(tasks[id]);
});

router.post('/', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.json(newTask);
})


export { router };