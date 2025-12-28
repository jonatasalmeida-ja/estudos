import express from 'express';
import { router } from './routes/products.js';

const app = express()

app.use(express.json()); // essencial para o POST
app.use('/products', router);

app.listen(3000, () => {
    console.log('Server is running...')
})