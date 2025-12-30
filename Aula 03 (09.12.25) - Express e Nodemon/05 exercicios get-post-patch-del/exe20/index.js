import express from 'express';
import { router } from './routes/projects.js';

const app = express();

app.use(express.json());
app.use('/projects', router);

app.listen(3000, () => {
    console.log('Server is running....')
})