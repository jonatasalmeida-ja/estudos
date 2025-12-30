import { Router } from "express";

const router = Router();
const tickets = [];

router.get('/', (req, res) => {
    res.send(tickets);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (tickets[id] === undefined) {
        res.send('Ticket não encontrado');
        return
    }

    res.json(tickets[id]);
});

router.post('/', (req, res) => {
    const newTicket = req.body;
    tickets.push(newTicket);
    res.json(newTicket);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const ticket = tickets[id];

    if (!ticket) {
        res.status(404).send('Ticket não encontrado');
        return
    }

    if (req.body.status !== undefined) {
        ticket.status = req.body.status;
    }

    res.json(ticket);
});

export { router };