import { Router } from "express";
import { validateOrder } from "../validator/orderValidator.js";

const router = Router()
const orders = [];

router.get('/', (req, res) => {
    res.json(orders);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).send('ID inválido');
        return;
    }

    if (orders[id] === undefined) {
        res.status(404).send('Pedido não encontrado');
        return;
    }

    res.json(orders[id]);
});

router.post('/', (req, res) => {
    const error = validateOrder(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { customer, total, delivered } = req.body;
    const newOrder = { customer, total, delivered };
    orders.push(newOrder);
    res.status(201).json(newOrder);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    if (isNaN(id)) {
        res.status(400).send('ID inválido');
        return;
    }

    const order = orders[id];
    if (order === undefined) {
        res.status(404).send('Pedido não encontrado');
        return;
    }

    const error = validateOrder(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { customer, total, delivered } = req.body;

    if (customer !== undefined) {
        order.customer = customer;
    }

    if (total !== undefined) {
        order.total = total;
    }

    if (delivered !== undefined) {
        order.delivered = delivered;
    }

    res.status(200).json(order);
});

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (isNaN(id)) {
        res.status(400).send('ID inválido');
        return;
    }

    const order = orders[id];

    if (order === undefined) {
        res.status(404).send('Pedido não encontrado');
        return;
    }

    const removedOrder = orders.splice(id, 1);
    res.status(200).json(removedOrder[0]);
});

export { router };