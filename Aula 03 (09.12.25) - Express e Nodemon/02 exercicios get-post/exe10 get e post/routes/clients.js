import { Router } from "express";

const router = Router();
const clients = [];

router.get('/', (req, res) => {
    res.send(clients);
})

router.post('/', (req, res) => {
    const newClient = req.body;
    clients.push(newClient);
    res.json(newClient);
})

export { router };
