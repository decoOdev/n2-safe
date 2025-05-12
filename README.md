# 🔐 N2 - API Segura com Login e Gerenciamento de Usuários

Este repositório contém a implementação segura de uma API com sistema de autenticação e gerenciamento de usuários, utilizando práticas recomendadas de segurança da informação. O projeto é parte da avaliação N2 da disciplina de Segurança da Informação.

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
- method-override

---

## 📁 Estrutura de Diretórios

```
n2-safe/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── middlewares/
│   ├── views/
│   └── app.js
├── .env
├── .gitignore
├── README.md
└── package.json
```

---

## ⚙️ Como rodar o projeto localmente

### Pré-requisitos:

- Node.js e npm instalados
- PostgreSQL rodando localmente

### Passos:

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/n2-safe.git
cd n2-safe
```

2. **Instale as dependências:**

```bash
npm install
```

3. **Configure o arquivo `.env`:**

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/n2safe"
JWT_SECRET="segredo_super_seguro"
```

4. **Crie o banco de dados no PostgreSQL com o nome `n2safe`**

5. **Execute a migração com Prisma:**

```bash
npx prisma migrate dev --name init
```

6. **Inicie a aplicação:**

```bash
npm run dev
```

---

## 🌐 Funcionalidades

- Registro e login com autenticação via JWT
- Criptografia de senha com bcrypt
- Sessões via cookies HTTPOnly
- Middleware para proteger rotas sensíveis
- Interface com EJS
- Logout com destruição de cookie
- **CRUD completo de usuários**:
  - Listagem de usuários
  - Atualização de nome/email
  - Exclusão de usuários
- Acesso ao painel `/users` apenas para usuários autenticados

---

## 📬 Rotas principais

| Método | Rota       | Descrição                           | Proteção |
| ------ | ---------- | ----------------------------------- | -------- |
| GET    | /register  | Formulário de registro              | ❌       |
| POST   | /register  | Registra novo usuário               | ❌       |
| GET    | /login     | Formulário de login                 | ❌       |
| POST   | /login     | Autentica usuário e gera cookie JWT | ❌       |
| GET    | /dashboard | Painel após login                   | ✅       |
| POST   | /logout    | Finaliza a sessão                   | ✅       |
| GET    | /users     | Lista todos os usuários             | ✅       |
| PUT    | /users/:id | Atualiza nome/email de um usuário   | ✅       |
| DELETE | /users/:id | Remove um usuário                   | ✅       |

---

> **ℹ️ Observação:** As rotas marcadas com `❌` não exigem autenticação JWT porque são usadas para entrada no sistema (registro e login).  
> Já as rotas marcadas com `✅` são protegidas e exigem que o usuário esteja autenticado via token JWT (armazenado em cookie).  
> Caso o token não esteja presente ou seja inválido, a aplicação retorna um erro de acesso negado.

## 🧪 Testes com Postman

1. Enviar `POST /register` com `username`, `email`, `password`
2. Enviar `POST /login` com email e senha válidos
3. Copiar o cookie `token` retornado e usar como:
   ```
   Cookie: token=SEU_TOKEN_AQUI
   ```
4. Testar rotas protegidas:
   - `GET /users`
   - `PUT /users/:id`
   - `DELETE /users/:id`

---
