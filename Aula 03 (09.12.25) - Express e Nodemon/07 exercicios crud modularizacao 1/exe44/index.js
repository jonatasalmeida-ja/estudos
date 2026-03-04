import express from 'express';
import { router } from './routes/orders.js';

const app = express();

app.use(express.json());
app.use('/orders', router);

app.listen(3000, () => {
    console.log('Server ir running...');
});