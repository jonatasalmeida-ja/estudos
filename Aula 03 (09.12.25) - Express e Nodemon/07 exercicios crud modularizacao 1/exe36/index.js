import express from 'express';
import { router } from './routes/novelas.js';

const app = express();

app.use(express.json());
app.use('/novelas', router);

app.listen(3000, () => {
    console.log('Server is running...');
});