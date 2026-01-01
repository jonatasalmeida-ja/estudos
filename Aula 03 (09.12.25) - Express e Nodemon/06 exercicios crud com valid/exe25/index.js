import express from 'express';
import { router } from './routes/profiles.js';

const app = express();

app.use(express.json());
app.use('/profiles', router);

app.listen(3000, () => {
    console.log('Serveris running...')
})