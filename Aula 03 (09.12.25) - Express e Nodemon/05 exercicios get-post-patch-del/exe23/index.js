import express from 'express';
import { router } from './routes/games.js';

const app = express();

app.use(express.json());
app.use('/games', router);

app.listen(3000, () => {
    console.log('Server is running...')
})