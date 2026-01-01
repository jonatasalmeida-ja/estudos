import { Router } from "express";

const router = Router();
const profiles = [];

router.get('/', (req, res) => {
    res.json(profiles);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);
    
    if (profiles[id] === undefined) {
        res.status(404).send('Perfil não encontrado');
        return;
    }

    res.json(profiles[id]);
});

router.post('/', (req, res) => {
    const { username, bio, followers } = req.body;

    if (!username || !bio || followers === undefined) {
        res.status(400).send('Nome do usuário, Bio e Seguidores são obrigatórios');
        return;
    }

    if (typeof username !== 'string' || typeof bio !== 'string' || typeof followers !== 'number') {
        res.status(400).send('Tipos inválidos de dados');
        return;
    }

    const newProfile = {username, bio, followers};
    profiles.push(newProfile);

    res.status(201).json(newProfile);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const profile = profiles[id];

    if (!profile) {
        res.status(404).send('Perfil não encontrado');
        return;
    }

    const { username, bio, followers } = req.body;
   
    if (username !== undefined && typeof username !== 'string') {
        res.status(400).send(`Nome inválido`);
        return;
    }   

    if (bio !== undefined && typeof bio !== 'string') {
        res.status(400).send(`Bio inválida`);
        return;
    }

    if (followers !== undefined && typeof followers !== 'number') {
        res.status(400).send(`Quantidade de seguidores inválida`);
        return;
    }

    if (username !== undefined) {
        profile.username = username;
    }

    if (bio !== undefined) {
        profile.bio = bio;
    }

    if (followers !== undefined) {
        profile.followers = followers;
    }

    res.json(profile);
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const profile = profiles[id];

    if (!profile) {
        res.status(404).send('Perfil não encontrado');
        return;
    }

    const removedProfile = profiles.splice(id, 1);

    res.json(removedProfile[0]);
});

export { router };