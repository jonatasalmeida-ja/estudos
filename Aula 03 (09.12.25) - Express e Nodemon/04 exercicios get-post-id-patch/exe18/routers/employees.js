import { Router } from "express";

const router = Router();
const employees = [];

router.get('/', (req, res) => {
    res.send(employees);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (employees[id] === undefined) {
        res.send('Funcionário não encontrado');
        return
    }

    res.json(employees[id]);
});

router.post('/', (req, res) => {
    const newEmployee = req.body;
    employees.push(newEmployee);
    res.json(newEmployee);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const employee = employees[id];

    if (!employee) {
        res.status(404).send('Funcionário não encontrado');
        return
    }

    if (req.body.role !== undefined) {
        employee.role = req.body.role
    }

    res.json(employee);
});

export { router };