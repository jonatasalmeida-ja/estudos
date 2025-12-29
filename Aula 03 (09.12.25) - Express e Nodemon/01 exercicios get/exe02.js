import express from 'express';

const app = express() // similar a const server = http.createServer()

app.get('/status', (req, res) => { // similar a if (methos === 'GET' && path === '/status')
    res.send('Servidor ativo') // similar a res.writeHead + res.end
})

app.listen(3000, () => {
    console.log('Server is running...')
})