/*
- request → tudo que a pessoa que chegou está pedindo
- response → o que você vai devolver para ela

------------------------------------------------------------------
request.url é simplesmente o endereço que a pessoa tentou acessar no seu servidor.
Se você acessar no navegador, por exemplo: http://localhost:3000/login
O request.url vai ser: /login

------------------------------------------------------------------
→ url.search
url.search sempre devolve a parte completa de busca, começando com ?

Para esta URL: http://localhost:3000/saudacao?nome=Joana
O search é: ?nome=Joana

→ url.searchParams.get("nome"): Joana

-------------------------------------------------------------------

Resumo mental (guarde isso)

Exemplo: http://localhost3000/cor?nome=azul
    → request.url → string crua (/cor?nome=azul)
    → new URL() → transforma isso em objeto organizado
    → pathname → só o caminho (/cor)
    → searchParams.get() → só o valor (azul)


O que é o http://localhost3000?
O endereço completo http://localhost:3000/cor?nome=azul é uma URL, e ela é composta por várias partes:

1 - Protocolo: http://
O protocolo indica como a comunicação será feita (HTTP ou HTTPS).

2 - Host (localhost:3000)
O host é a máquina e a porta.
No seu caso, localhost significa o servidor local (o seu computador).
3000 é a porta usada para o servidor. Quando você roda um servidor localmente, escolhe uma porta (geralmente 3000 ou 8080).

3 - Caminho: /cor
O caminho é o que vem após o host: /cor. Ele indica a rota que o servidor vai tratar.

4- Query string: ?nome=azul
A query string começa com ? e é composta por parâmetros: nome=azul.
*/