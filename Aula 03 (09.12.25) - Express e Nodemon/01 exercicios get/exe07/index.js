import express from 'express';
import { router } from './routes/authors.js';

const app = express();

app.use('/authors', router);

app.listen(3000, () => {
    console.log('Server is running...')
})