import express from 'express';
import { router } from './routes/courses.js';

const app = express();

app.use(express.json());
app.use('/courses', router);

app.listen(3000, () => {
    console.log('Server is running...');
});