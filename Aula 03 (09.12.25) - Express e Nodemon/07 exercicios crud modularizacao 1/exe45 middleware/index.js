import express from 'express';
import { router } from './routes/products.js';
import { logger } from './middleware/logger.js';

const app = express();

app.use(express.json());
app.use(logger)
app.use('/products', router);

app.listen(3000, () => {
    console.log('Server is running...');
});