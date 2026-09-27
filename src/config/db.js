const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error('MongoDB connection error: MONGO_URI is not defined in environment variables');
    process.exit(1);
  }

  try {
    const conn = await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    throw new Error(`MongoDB connection error: ${error.message}`);
  }
};

module.exports = connectDB;
