import { Router } from "express";

const router = Router();
const users = [];

router.get('/', (req, res) => {
    res.send(users);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    
    if (users[id] === undefined) {
        res.status(404).send('Usuário não encontrado');
        return
    };

    res.json(users[id]);
});

router.post('/', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]

    if (!user) {
        res.status(404).send('Usuário não encontrado');
        return;
    };

    if (req.body.email !== undefined){
        user.email = req.body.email;
    };

    res.json(user);
});

export { router };