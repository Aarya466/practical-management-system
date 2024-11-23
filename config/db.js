import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "mongodb+srv://aaryatehare:aarya123@cluster0.ml8a1.mongodb.net/Practical_management"
); // Simplified connection
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Database connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
