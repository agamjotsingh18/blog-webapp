import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes.js';
import router from './routes/user-routes.js';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

const PORT = process.env.PORT || 5000;
const mongoURI = process.env.MONGO_URI;

// Set mongoose to handle strictQuery deprecation warning
mongoose.set('strictQuery', false);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to database. Listening on localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
