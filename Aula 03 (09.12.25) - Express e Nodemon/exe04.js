import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send('Olá, express')
});

app.listen(3000, () => {
    console.log('Server is running...')
})