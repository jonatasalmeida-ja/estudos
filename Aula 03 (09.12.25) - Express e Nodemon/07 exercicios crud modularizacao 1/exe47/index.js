import express from 'express';
import { router } from './routes/songs.js';
import { logger } from './middlewares/logger.js';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/songs', router);

app.use((req, res) => {
    return res.status(404).json({ error: `Rota ${req.method} ${req.url} nao encontrada`});
})

app.listen(3000, () => {
    console.log('Server is running...');
});