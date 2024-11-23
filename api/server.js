import dotenv from 'dotenv';
import express from 'express';
import connectDB from '../config/db.js';
import userRoutes from '../routes/userRoutes.js';  // Import userRoutes
import practicalRoutes from '../routes/practicalRoutes.js';  // Import practicalRoutes

dotenv.config();

const app = express();
// Start the server
app.use(express.json());
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON data


// Connect to MongoDB
connectDB();

// Use routes
app.use('/api', userRoutes);  // User Routes
app.use('/api', practicalRoutes);  // Practical Routes

// Sample route
app.get("/", (req, res) => {
  res.send("API is running...");
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
