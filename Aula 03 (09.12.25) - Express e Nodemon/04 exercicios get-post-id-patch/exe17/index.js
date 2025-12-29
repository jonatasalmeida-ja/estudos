import express from 'express';
import { router } from './routes/students.js';

const app = express();

app.use(express.json());
app.use('/students', router);

app.listen(3000, () => {
    console.log('Server is running...')
});