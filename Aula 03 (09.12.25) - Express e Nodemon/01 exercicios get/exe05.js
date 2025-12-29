import express from 'express';

const app = express();

app.get('/books', (req, res) => {
    res.send('Lista de livros')
});

app.get('/authors', (req, res) => {
    res.send('Lista de autores')
});

app.listen(3000, () => {
    console.log('Server is running...')
})