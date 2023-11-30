import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js'
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express(); // Express server
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>
{
   res.send("ok")
})

app.use('/user',userRoutes)//use userRoutes as a middleware

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {});

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('MongoDB database connection established');
});

app.listen(PORT, () => {
  console.log('Server running on PORT', PORT);
});
