import express from 'express';

// Importa os controladores que manipulam as ações de autenticação
import {
  renderRegister,
  handleRegister,
  renderLogin,
  handleLogin,
  renderDashboard
} from '../controllers/auth-controller.js';

// Middleware que protege rotas (exige token JWT válido)
import { ensureAuthenticated } from '../middlewares/auth-middleware.js';

const router = express.Router();

// 📌 Registro de usuário (GET: renderiza formulário, POST: processa envio)
router.get('/register', renderRegister);
router.post('/register', handleRegister);

// 📌 Login de usuário (GET: renderiza formulário, POST: autentica e gera token)
router.get('/login', renderLogin);
router.post('/login', handleLogin);

// 📌 Página protegida (acessível apenas com token válido)
router.get('/dashboard', ensureAuthenticated, renderDashboard);

// 🔐 Logout (limpa cookie com o token e redireciona para login)
router.post('/logout', (req, res) => {
  res.clearCookie('token'); // Remove o token do cookie
  res.redirect('/login');
});

export default router;