import { Router } from "express";

const router = Router();
const courses = [];

router.get('/', (req, res) => {
    res.json(courses);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (courses[id] === undefined) {
        res.status(404).send('Curso não encontrado');
        return;
    };

    res.json(courses[id]);
});

router.post('/', (req, res) => {
    const { title, duration, level } = req.body;

    if (!title || !level || duration === undefined) {
        res.status(400).send('O título, duração e level são campos obrigatórios, por favor preencher corretamente');
        return;
    };

    if (typeof title !== 'string' || typeof level !== 'string' || typeof duration !== 'number') {
        res.status(400).send('Tipos de dados inválidos');
        return;
    };

    const newCourse = { title, duration, level };
    courses.push(newCourse);
    res.json(newCourse);
});

router.patch('/:id',(req, res) => {
    const id = Number(req.params.id);
    const course = courses[id];

    if (!course) {
        res.status(404).send('Curso não encontrado');
        return;
    };

    const { title, duration, level } = req.body;

    if (title !== undefined && typeof title !== 'string') {
        res.status(400).send('Título inválido');
        return;
    };

    if (level !== undefined && typeof level !== 'string') {
        res.status(400).send('Nível inválido');
        return;
    };

    if (duration !== undefined && typeof duration !== 'number') {
        res.status(400).send('Duração inválida');
        return;
    };

    if (title !== undefined) {
        course.title = title;
    };

    if (level !== undefined) {
        course.level = level;
    };
    
    if (duration !== undefined) {
        course.duration = duration;
    };

    res.status(201).json(course);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const course = courses[id];

    if (!course) {
        res.status(404).send('Curso não encontrado');
        return;
    };

    const removedCourse = courses.splice(id, 1);

    res.json(removedCourse[0]);
});

export { router };