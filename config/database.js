import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the connection is already open, return the existing connection
  if (connected) {
    console.log('MongoDB is already connected...');
    return;
  }

  // Connect to the MongoDB database

  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB is connected...');
  } catch (e) {
    console.error('Error connecting to MongoDB: ', e);
  }
}

export default connectDB;