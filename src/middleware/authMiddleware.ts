// src/middleware/authMiddleware.ts
/* import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Acesso não autorizado. Token não fornecido.' });
  }

  try {
    const decoded = jwt.verify(token, 'seu_segredo'); // Substitua por sua chave secreta

    // Adiciona o usuário decodificado à requisição para uso posterior, se necessário
    req.user = decoded;

    next(); // Continue para a próxima middleware ou rota
  } catch (error) {
    console.error('Erro ao verificar o token:', error);
    res.status(401).json({ error: 'Token inválido' });
  }
}; */
