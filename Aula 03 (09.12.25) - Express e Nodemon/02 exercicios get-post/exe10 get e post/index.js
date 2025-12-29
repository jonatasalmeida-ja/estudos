import express from 'express';
import { router } from './routes/clients.js';

const app = express();

app.use(express.json());
app.use('/clients', router);

app.listen(3000, () => {
    console.log('Server is running...')
})