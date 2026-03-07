import express from 'express'
import { router } from './routes/books.js'
import { logger } from './middleware/logger.js'

const app = express();

app.use(express.json());
app.use(logger);

app.use('/books', router);

app.use((req, res) => {
    return res.status(404).json({ error: `Rota ${req.method} ${req.url} não encontrada`});
})

app.listen(3000, () => {
    console.log('Server is running...');
});