# 🔐 N2 - API Segura com Login (Versão 2.0)

Este repositório contém a implementação segura de uma API de autenticação e autorização com interface em EJS, banco de dados PostgreSQL e práticas recomendadas de segurança. O projeto faz parte do trabalho de Segurança da Informação — N2 da disciplina Administração de Sistemas Operacionais II.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- EJS (interface HTML)
- Prisma ORM
- PostgreSQL
- JWT (JSON Web Token)
- bcrypt
- cookie-parser
- dotenv

---

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos:

- Node.js e npm instalados
- PostgreSQL rodando localmente
- Conta no GitHub (para clonar ou colaborar)

### Passos:

1. **Clone o repositório:**

\`\`\`bash
git clone https://github.com/seu-usuario/n2-safe.git
cd n2-safe
\`\`\`

2. **Instale as dependências:**

\`\`\`bash
npm install
\`\`\`

3. **Configure o arquivo `.env`:**

Crie um `.env` com a seguinte variável:

\`\`\`env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/n2safe"
JWT_SECRET="segredo_super_seguro"
\`\`\`

4. **Crie o banco de dados no PostgreSQL com o nome `n2safe`**

5. **Rode a migração do Prisma:**

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

6. **Rode a aplicação:**

\`\`\`bash
npm run dev
\`\`\`

---

## 🌐 Funcionalidades

- Registro de usuários (com hash de senha via bcrypt)
- Login com autenticação via JWT
- Interface simples via EJS
- Proteção de rotas com middleware JWT
- Logout com remoção de cookie

---

## 📬 Rotas principais

| Método | Rota       | Descrição                        |
| ------ | ---------- | -------------------------------- |
| GET    | /register  | Formulário de registro           |
| POST   | /register  | Processa novo cadastro           |
| GET    | /login     | Formulário de login              |
| POST   | /login     | Processa autenticação            |
| GET    | /dashboard | Área protegida (JWT obrigatório) |
| POST   | /logout    | Encerra a sessão                 |

---

## 🧪 Testes com Postman

1. Envie `POST /register` com username, email e senha.
2. Envie `POST /login` com email e senha válidos.
3. Copie o cookie `token` da resposta e use em `GET /dashboard`.

---
