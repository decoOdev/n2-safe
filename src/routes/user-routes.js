import express from 'express';
import { getAllUsers, updateUser, deleteUser } from '../controllers/user-controller.js';

import { ensureAuthenticated } from '../middlewares/auth-middleware.js';

const router = express.Router();

// Rota para listar todos os usuários (protegida)
router.get('/users', ensureAuthenticated, getAllUsers);

// Rota para atualizar um usuário (protegida)
router.put('/users/:id', ensureAuthenticated, updateUser);

// Rota para deletar um usuário (protegida)
router.delete('/users/:id', ensureAuthenticated, deleteUser);

export default router;