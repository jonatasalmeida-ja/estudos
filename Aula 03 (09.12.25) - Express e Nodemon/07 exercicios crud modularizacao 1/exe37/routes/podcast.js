import { Router } from "express";
import { validatePodcast } from "../validators/podcastValidators.js";

const router = Router();
const podcasts = [];

router.get('/', (req, res) => {
    res.json(podcasts);
});

router.get('/:id', (req, res) => {
    const id = Number(req.params.id);

    if (podcasts[id] === undefined) {
        res.status(404).send('Podcast não encontrado');
        return;
    }

    res.json(podcasts[id]);
});

router.post('/', (req, res) => {
    const error = validatePodcast(req.body);

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, host, episodes, active } = req.body
    const newPodcast = { title, host, episodes, active };
    podcasts.push(newPodcast);
    res.status(201).json(newPodcast);
});

router.patch('/:id', (req, res) => {
    const id = Number(req.params.id);
    const podcast = podcasts[id];

    if (!podcast) {
        res.status(404).send('Podcast não encontrado');
        return;
    }

    const error = validatePodcast(req.body, { partial: true });

    if (error) {
        res.status(400).send(error);
        return;
    }

    const { title, host, episodes, active } = req.body;

    if (title !== undefined) {
        podcast.title = title;
    }

    if (host !== undefined) {
        podcast.host = host;
    }

    if (episodes !== undefined) {
        podcast.episodes = episodes;
    }

    if (active !== undefined) {
        podcast.active = active;
    }

    res.status(200).json(podcast);
})

router.delete('/:id', (req, res) => {
    const id = Number(req.params.id);
    const podcast = podcasts[id];

    if (!podcast) {
        res.status(404).send('Podcast não encontrado');
        return;
    }

    const removedPodcast = podcasts.splice(id, 1);
    res.status(200).json(removedPodcast[0]);
});

export { router };