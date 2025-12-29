import { Router } from "express";

const router = Router();
const students = [];

router.get('/', (req, res) => {
    res.send(students);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (students[id] === undefined) {
        res.send('Aluno nao encontrado');
        return
    }

    res.json(students[id]);
});

router.post('/', (req, res) => {
    const newStudent = req.body;
    students.push(newStudent);
    res.json(newStudent);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const student = students[id];

    if (!student) {
        res.status(404).send('Aluno nao encontrado');
        return
    }

    if (req.body.age !== undefined) {
        student.age = req.body.age;
    };

    res.json(student);
});

export { router };