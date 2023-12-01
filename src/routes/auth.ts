// src/routes/auth.ts
import bcrypt from 'bcrypt';
import { Request, Response, Router } from 'express';
import jwt from 'jsonwebtoken';
import UserModel from '../models/userModel';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      // Se as senhas não coincidirem, retorne uma resposta de erro
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    // Agora, você pode gerar um token de autenticação ou retornar informações do usuário
    const token = jwt.sign(
        {
          userId: user._id,
          userEmail: user.email,
          userPrivilege: user.privilege,
        },
        'seu_segredo', // Substitua por uma chave secreta mais segura em produção
        { expiresIn: '1h' } // Define o tempo de expiração do token (opcional)
      );
    // Dependendo da sua estratégia de autenticação

    // Exemplo de retorno de informações do usuário
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        privilege: user.privilege,
      },
      token: token,
    });
  } catch (error) {
    console.log("🚀 ~ file: auth.ts ~ router.post('/login') ~ error", error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
});

export default router;
