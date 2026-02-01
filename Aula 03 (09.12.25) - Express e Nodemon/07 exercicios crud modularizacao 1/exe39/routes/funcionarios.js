import { Router } from "express";
import { validateFuncionario } from "../validators/funcionarioValidator.js";

const router = Router();
const funcionarios = [];

router.get('/', (req, res) => {
    res.json(funcionarios);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    
    if (funcionarios[id] === undefined) {
        res.status(404).send('Funcionário não encontrado');
        return;
    }

    res.json(funcionarios[id]);
});

router.post('/', (req, res) => {
    const error = validateFuncionario(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { name, salary, active } = req.body;
    const newFuncionario = { name, salary, active };
    funcionarios.push(newFuncionario);
    res.status(201).json(newFuncionario);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const funcionario = funcionarios[id];

    if (funcionario === undefined) {
        res.status(404).send('Funcionário não encontrado');
        return;
    }

    const error = validateFuncionario(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { name, salary, active } = req.body;

    if (name !== undefined) {
        funcionario.name = name;
    }

    if (salary !== undefined) {
        funcionario.salary = salary;
    }

    if (active !== undefined) {
        funcionario.active = active;
    }

    res.status(200).json(funcionario);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const funcionario = funcionarios[id];

    if (funcionario === undefined) {
        res.status(404).send('Funcionário não encontrado');
        return;
    }

    const removedFuncionario = funcionarios.splice(id, 1);

    res.status(200).json(removedFuncionario[0]);
});

export { router };