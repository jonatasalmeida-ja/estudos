/*
Fluxo da requisição:

1. Server recebe request
2. URL é analisada
3. Rota é dividida (split)
4. basePath é identificado
5. Router encontra o handler
6. Método HTTP seleciona a função
7. Handler executa lógica (find no array)
8. sendJson envia a resposta

-----

Diagrama mental do seu backend

Quando alguém faz uma requisição:
GET /orders/2

o fluxo no seu código é este:
CLIENTE
   │
   │ HTTP Request
   ▼
SERVER (server.js)
   │
   │ recebe req e res
   ▼
URL PARSER
   │
   │ extrai pathname
   ▼
ROUTE SPLIT
   │
   │ /orders/2 → ["", "orders", "2"]
   ▼
BASE PATH
   │
   │ basePath = /orders
   │ id = 2
   ▼
ROUTER (routes.js)
   │
   │ encontra handler correto
   ▼
HANDLER (orders.js)
   │
   │ escolhe método GET
   ▼
BUSCA NO ARRAY
   │
   │ ordersList.find(...)
   ▼
HELPER
   │
   │ sendJson()
   ▼
RESPOSTA
   │
   ▼
CLIENTE RECEBE JSON

Versao Resumida:
request
   ↓
server
   ↓
router
   ↓
handler
   ↓
logic
   ↓
response
*/