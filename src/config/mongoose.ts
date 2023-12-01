// src/config/mongoose.ts
import mongoose from 'mongoose';

const connectDB = async (MONGODB_URI: string) => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Conexão com o MongoDB estabelecida.');
  } catch (error) {
  
    if (error instanceof Error) {
      console.error('Erro ao conectar ao MongoDB:', error.message);
    } else {
     
      console.error('Erro ao conectar ao MongoDB:', error);
    }
    process.exit(1); 
  }
};

export default connectDB;
