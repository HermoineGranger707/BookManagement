import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import apiRoutes from './routes/api.js';

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://127.0.0.1:27017/library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.use('/api', apiRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
