import express from 'express';
import { router } from './routes/bands.js';

const app = express();

app.use(express.json());
app.use('/bands', router);

app.listen(3000, () => {
    console.log('Server is running...');
});