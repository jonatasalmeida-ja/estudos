import express from 'express';
import { router } from './routes/podcast.js';

const app = express();

app.use(express.json());
app.use('/podcast', router);

app.listen(3000, () => {
    console.log('Server is running...')
})