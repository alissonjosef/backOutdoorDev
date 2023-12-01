import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/mongoose';
import router from './routes';
dotenv.config(); 

const app = express()

app.use(express.json());

const URLMONGO: string | undefined = process.env.MONGODB_URI 
const urlMongoString: string = URLMONGO ?? '';

connectDB(urlMongoString);

// Adicione suas rotas
app.use('/', router);

  app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  })