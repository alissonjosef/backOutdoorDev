// src/routes/user.ts
import bcrypt from 'bcrypt';
import { Request, Response, Router } from 'express';
import UserModel from '../models/userModel';

const router = Router();

router.get('/',async (req: Request, res: Response) => {
  const users= await UserModel.find()
  res.json(users)
});

router.post('/createUser', async (req: Request, res: Response) => {
    try {
      const { name, email, privilege, password } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new UserModel({
        name,
        email,
        privilege,
        password: hashedPassword
      });
  
      await newUser.save();
  
      res.status(201).json(newUser);
    } catch (error) {
      
      res.status(500).json({ error: 'Erro ao criar usuário' });
    }
  });

export default router;
