import { Router } from "express";
import { validateClient } from "../validators/clientValidator.js";

const router = Router();
const clients = [];

router.get('/', (req, res) => {
    res.json(clients);
})

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    if (clients[id] === undefined) {
        res.status(404).send('Cliente não encontrado');
        return;
    }

    res.json(clients[id]);
});

router.post('/', (req, res) => {
    const error = validateClient(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { name, age, premium } = req.body;
    const newClients = { name, age, premium };
    clients.push(newClients);
    res.status(201).json(newClients);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const client = clients[id];

    if (client === undefined) {
        res.status(404).send('Cliente não encontrado');
        return;
    }

    const error = validateClient(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    };

    const { name, age, premium } = req.body;

    if (name !== undefined) {
        client.name = name;
    }

    if (age !== undefined) {
        client.age = age;
    }

    if (premium !== undefined) {
        client.premium = premium;
    }

    res.status(200).json(client);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        return res.status(400).send('ID inválido');
    }

    const client = clients[id];

    if (client === undefined) {
        res.status(404).send('Cliente não encontrado');
        return;
    }

    const removedClient = clients.splice(id, 1);

    res.status(200).json(removedClient[0]);
});

export { router };