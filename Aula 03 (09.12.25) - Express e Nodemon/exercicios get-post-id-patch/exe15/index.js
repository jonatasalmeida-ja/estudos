import express from 'express';
import { router } from './routes/users.js';

const app = express();

app.use(express.json());
app.use('/users', router);

app.listen(3000, () => {
    console.log('Server is running...')
});