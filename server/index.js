import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import contactRoutes from './routes/contact.js';

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Photography Backend API' });
});

// API routes
app.use('/api', contactRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});