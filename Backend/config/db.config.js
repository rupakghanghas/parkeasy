const mongoose = require('mongoose');
require('dotenv').config();
// const logger = require('../logger/api.logger');

const connectDB = async () => {
    try {
        // Check if DB_URI is provided
        if (!process.env.DB_URI) {
            throw new Error('DB_URI environment variable is not set. Please create a .env file with your MongoDB connection string.');
        }

        const options = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };

        await mongoose.connect(process.env.DB_URI, options);
        console.log('✅ MongoDB Connected Successfully...');
        console.log(`📊 Database: ${mongoose.connection.name}`);
        console.log(`🌐 Host: ${mongoose.connection.host}`);
        console.log(`🔌 Port: ${mongoose.connection.port}`);
    } catch (error) {
        console.error('❌ MongoDB Connection Error:', error.message);
        console.log('🔧 Please check your connection string and try again');
        process.exit(1);
    }
}

module.exports = {
    connectDB
}