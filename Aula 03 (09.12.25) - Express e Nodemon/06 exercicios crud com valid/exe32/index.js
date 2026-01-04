import express from 'express';
import { router } from './routes/cities.js';

const app = express();

app.use(express.json());
app.use('/cities', router);

app.listen(3000, () => {
    console.log('Server is running...');
});