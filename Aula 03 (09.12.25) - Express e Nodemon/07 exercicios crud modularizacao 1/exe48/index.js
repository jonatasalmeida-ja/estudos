import express from 'express';
import { logger } from './middlewares/logger.js';
import { router } from './routes/consoles.js';

const app = express();

app.use(express.json());
app.use(logger);

app.use('/consoles', router);

app.use((req, res) => {
    return res.status(404).json({ error: `Rota ${req.method} ${req.url} não encontrada`});
});

app.listen(3000, ()=> {
    console.log('Server is running...');
});