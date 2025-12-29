import express from 'express';
import { router } from './routes/books.js';

const app = express();

app.use('/books', router);

app.listen(3000, () => {
    console.log('Server is running...')
})