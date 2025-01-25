import mongoose, { connect } from 'mongoose';

import dotenv from 'dotenv';

dotenv.config();

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

connectDB();

export default mongoose;

