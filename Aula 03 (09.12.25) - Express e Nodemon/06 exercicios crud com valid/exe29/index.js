import express from 'express';
import { router } from './routes/series.js';

const app = express();

app.use(express.json());
app.use('/series', router);

app.listen(3000, () => {
    console.log('Server is running...')
})