import express from 'express';
import { router } from './routes/tasks.js';

const app = express();

app.use(express.json());
app.use('/tasks', router);

app.listen(3000, () => {
    console.log('Server is running...')
})