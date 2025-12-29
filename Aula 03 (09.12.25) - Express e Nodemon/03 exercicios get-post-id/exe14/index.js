import express from 'express';
import { router } from './routes/comments.js';

const app = express();

app.use(express.json());
app.use('/comments', router);

app.listen(3000, () => {
    console.log('Server is running...')
})