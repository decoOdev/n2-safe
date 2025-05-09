import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const prisma = new PrismaClient();

// Renderiza a página de registro
export const renderRegister = (req, res) => {
  res.render('register');
};

// Processa o formulário de registro
export const handleRegister = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword
      }
    });
    res.redirect('/login');
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao registrar usuário');
  }
};

// Renderiza a página de login
export const renderLogin = (req, res) => {
  res.render('login');
};

// Processa o login e gera token JWT
export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) return res.status(401).send('Credenciais inválidas');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) return res.status(401).send('Credenciais inválidas');

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h'
    });

    // Aqui usamos cookie apenas para facilitar testes no navegador
    res.cookie('token', token, { httpOnly: true });
    res.redirect('/dashboard');
  } catch (err) {
  console.error("Erro no login:", err);
  res.status(500).send('Erro interno no login');
}
};

// Renderiza a página protegida
export const renderDashboard = (req, res) => {
  res.render('dashboard', { username: req.user.username });
};