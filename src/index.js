import express, { json } from 'express';
import joi from 'joi';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config()

const app = express();
app.use(json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Servidor está funcionando!');
});