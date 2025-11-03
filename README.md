API RESTful com Express e Prisma

Projeto desenvolvido com Node.js, Express, TypeScript e Prisma ORM, com foco em operações CRUD (criar, listar, atualizar e excluir) para os modelos User, Post e Comment.

Estrutura da API

A API foi organizada em camadas:

controllers/ → contém a lógica das operações (CRUD)

routes/ → define as rotas e conecta aos controllers

prismaService.ts → faz a conexão com o banco via Prisma

index.ts → inicia o servidor Express

Endpoints Implementados

Usuário:
POST /api/user – cria usuário
GET /api/user – lista usuários
GET /api/user/:id – busca usuário por ID
PUT /api/user/:id – atualiza usuário
DELETE /api/user/:id – remove usuário

Post:
POST /api/post – cria post
GET /api/post – lista posts
GET /api/post/:id – busca post
PUT /api/post/:id – atualiza post
DELETE /api/post/:id – remove post

Comentário:
POST /api/comment – cria comentário
GET /api/comment – lista comentários
GET /api/comment/:id – busca comentário
PUT /api/comment/:id – atualiza comentário
DELETE /api/comment/:id – remove comentário

Comandos de Execução

Instalar dependências:
npm install

Gerar Prisma Client:
npx prisma generate

Criar banco e migração:
npx prisma migrate dev --name init

Rodar servidor:
npm run dev

Servidor disponível em: http://localhost:3000

Tratamento de Erros

404 Not Found: registro não encontrado (erro Prisma P2025)
→ Exemplo: “Registro com ID X não encontrado.”

409 Conflict: violação de campo único (erro Prisma P2002)
→ Exemplo: “Email já cadastrado.”

500 Internal Server Error: erro inesperado no servidor.

Resumo Final

A API realiza operações CRUD completas com Express e Prisma, mantém uma estrutura simples e organizada, e aplica tratamento de erros claro e padronizado.