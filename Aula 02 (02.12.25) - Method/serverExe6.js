import http from 'http'

// Mapa de rotas:
// cada path aponta para um objeto de handlers por método HTTP
const routes = {
    '/products': {
        GET: function (req, res) {
            res.end('Listando Produtos')
        },
        POST: function (req, res) {
            res.end('Criando Produto')
        }
    },
    '/orders': {
        GET: function (req, res) {
            res.end('Listando Pedidos')
        },
        POST: function (req, res) {
            res.end('Criando Pedido')
        }
    }
}

const server = http.createServer((req, res) => {
    const method = req.method              // método HTTP da requisição (GET, POST, etc)
    
    const url = new URL(                   // cria um objeto URL completo
        req.url,                           // caminho recebido na requisição
        `http://${req.headers.host}`       // base necessária para o parser funcionar
    )

    const path = url.pathname              // extrai apenas o caminho (/products, /orders)

    res.writeHead(200, {                   // define o status e o tipo da resposta
        'Content-Type': 'text/plain; charset=utf-8'
    })

    const route = routes[path]             // tenta encontrar a rota no mapa

    if (!route) {                          // se a rota não existir
        res.end('Página não encontrada')
        return
    }

    const handler = route[method]          // tenta encontrar o handler do método

    if (!handler) {                        // se o método não for permitido nessa rota
        res.end('Método não permitido')
        return
    }

    handler(req, res)                      // executa o handler correto
})

server.listen(3000, () => {
    console.log('Server is running...')
})


/*
O que esse código ensina (em uma frase):

O servidor interpreta a requisição e delega a execução para o handler correto, usando o routes apenas como mapa.

Nada mais, nada menos.
*/