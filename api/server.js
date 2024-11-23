import dotenv from 'dotenv';
import express from 'express';
import connectDB from '../config/db.js';
import userRoutes from '../routes/userRoutes.js';  // Import userRoutes
import practicalRoutes from '../routes/practicalRoutes.js';  // Import practicalRoutes

dotenv.config();

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', userRoutes);  // User Routes
app.use('/api', practicalRoutes);  // Practical Routes

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
