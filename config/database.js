import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
  mongoose.set('strictQuery', true);

  // If the connection is already open, return the existing connection
  if (connected) {
    console.log('MongoDB est déjà connecté...');
    return;
  }

  // Connect to the MongoDB database

  try {
    // Connect to the MongoDB database
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log('MongoDB est maintenant conecté...');
  } catch (e) {
    console.error('Erreur de connection à MongoDB: ', e);
  }
}

export default connectDB;