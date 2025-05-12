import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// GET /users
export const getAllUsers = async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
        createdAt: true
      }
    });
    res.render('users', { users });
  } catch (err) {
    console.error('Erro ao listar usuários:', err);
    res.status(500).send('Erro ao listar usuários');
  }
};

// PUT /users/:id
export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { username, email } = req.body;

  try {
    await prisma.user.update({
      where: { id: parseInt(id) },
      data: { username, email }
    });
    res.redirect('/users');
  } catch (err) {
    console.error('Erro ao atualizar usuário:', err);
    res.status(500).send('Erro ao atualizar usuário');
  }
};

// DELETE /users/:id
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id) }
    });
    res.redirect('/users');
  } catch (err) {
    console.error('Erro ao deletar usuário:', err);
    res.status(500).send('Erro ao deletar usuário');
  }
};