import { Router } from "express";
import { validateCourse } from "../validator/courseValidator.js";

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
    }

    res.json(courses[id]);
});

router.post('/', (req, res) => {
    const error = validateCourse(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const newCourse = req.body;
    courses.push(newCourse);
    res.status(201).json(newCourse);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const course = courses[id];

    if (!course) {
        res.status(404).send('Curso não encontrada');
        return;
    }

    const error = validateCourse(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, hours, level, active } = req.body;

    if (title !== undefined) {
        course.title = title;
    }

    if (hours !== undefined) {
        course.hours = hours;
    }

    if (level !== undefined) {
        course.level = level;
    }

    if (active !== undefined) {
        course.active = active;
    }

    res.status(200).json(course);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const course = courses[id];

    if (!course) {
        res.status(40).send('Curso não encontrado');
        return;
    }

    const removedCourse = courses.splice(id, 1);
    res.status(200).json(removedCourse[0]);
});

export { router };