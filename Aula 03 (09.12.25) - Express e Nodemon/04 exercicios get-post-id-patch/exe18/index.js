import express from 'express';
import { router } from './routers/employees.js';

const app = express();

app.use(express.json());
app.use('/employees', router);

app.listen(3000, () => {
    console.log('Server is running...')
})