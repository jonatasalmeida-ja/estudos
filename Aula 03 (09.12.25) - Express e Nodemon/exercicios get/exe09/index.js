import express from 'express';
import { router } from './routes/orders.js';

const app = express();

app.use('/orders', router);

app.listen(3000, () => {
    console.log('Server is running...')
})