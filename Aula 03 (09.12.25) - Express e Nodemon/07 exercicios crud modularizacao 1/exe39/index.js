import express from 'express';
import { router } from './routes/funcionarios.js';

const app = express();

app.use(express.json());
app.use('/funcionarios', router);

app.listen(3000, () => {
    console.log('Server is running...');
});