export function homeRoute(request, response) {
    response.end(`Bem-vindo ao Servidor de Livros!
Rotas disponíveis:
/books?titulo=TituloDoLivro`)
}