import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

export const ensureAuthenticated = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).send('Acesso negado. Token ausente.');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

    if (!user) {
      return res.status(401).send('Usuário não encontrado.');
    }

    req.user = user; // Injeta dados do usuário na requisição
    next();
  } catch (err) {
    return res.status(401).send('Token inválido.');
  }
};