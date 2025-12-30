import { Router } from "express";

const router = Router();
const projects = [];

router.get('/', (req, res) => {
    res.json(projects);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;

    if (projects[id] === undefined) {
        res.status(404).send('Projeto não encontrado');
        return
    }

    res.json(projects[id]);
});

router.post('/', (req, res) => {
    const newProject = req.body;
    projects.push(newProject);
    res.json(newProject);
})

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const project = projects[id];

    if (!project) {
        res.status(404).send('Projeto não encontrado, nenhuma atualização será feita');
        return
    }

    if (req.body.status !== undefined) {
        project.status = req.body.status;
    }

    res.json(project);
});

router.delete('/:id',(req, res) => {
    const id = req.params.id;
    const project = projects[id];

    if (!project) {
        res.status(404).send('Nenhum item removido, projeto não encontrado');
        return
    }

    const removedProject = projects.splice(id, 1);

    res.json(removedProject[0]);
})

export { router };