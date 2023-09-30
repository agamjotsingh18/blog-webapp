import express from 'express';
import mongoose from 'mongoose';
import blogRouter from './routes/blog-routes';
import router from './routes/user-routes';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/user', router);
app.use('/api/blog', blogRouter);

const mongoURI = 'mongodb+srv://agamjot_singh:5hmBcj28K90D3K6u@cluster0.trhpj0r.mongodb.net/BlogWebapp';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(5000, () => {
      console.log('Connected to database. Listening on localhost:5000');
    });
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
