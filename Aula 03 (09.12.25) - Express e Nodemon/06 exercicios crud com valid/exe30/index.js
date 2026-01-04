import express from 'express';
import { router } from './routes/songs.js';

const app = express();

app.use(express.json());
app.use('/songs', router);

app.listen(3000, () => {
    console.log('Server is running...');
});