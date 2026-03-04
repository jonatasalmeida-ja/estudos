import { Router } from "express";
import { validateTask } from "../validators/taskValidator.js";

const router = Router();
const tasks = [];

router.get('/', (req, res) => {
    res.json(tasks);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).send('ID inválido');
        return;
    }

    if (tasks[id] === undefined) {
        res.status(404).send('Tarefa não encontrada');
        return;
    }

    res.json(tasks[id]);
});

router.post('/', (req, res) => {
    const error = validateTask(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, completed, priority } = req.body;
    const newTask = { title, completed, priority };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).send('ID inválido');
        return;
    }

    const task = tasks[id];

    if (task === undefined) {
        res.status(404).send('Tarefa não encontrada');
        return;
    }

    const error = validateTask(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, completed, priority } = req.body;

    if (title !== undefined) {
        task.title = title;
    }

    if (completed !== undefined) {
        task.completed = completed;
    }

    if (priority !== undefined) {
        task.priority = priority;
    }

    res.status(200).json(task);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).send('ID inválido');
        return;
    }

    const task = tasks[id];

    if (task === undefined) {
        res.status(404).send('Tarefa não encontrada');
        return;
    }

    const removedTask = tasks.splice(id, 1);
    res.status(200).json(removedTask[0]);
});

export { router };