import express from 'express';
import { router } from './routes/tickets.js';

const app = express();

app.use(express.json());
app.use('/tickets', router);

app.listen(3000, () => {
    console.log('Server is running...')
});