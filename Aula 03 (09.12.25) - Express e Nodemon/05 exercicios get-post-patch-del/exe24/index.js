import express from 'express'
import { router } from './routes/movies.js'

const app = express();

app.use(express.json());
app.use('/movies', router);

app.listen(3000, () => {
    console.log('Server is running...')
})