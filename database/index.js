const mongoose = require('mongoose');


const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/voosh", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected...');
    } catch (error) {
        console.log("Not connected....", error.message);
    }
}

module.exports = { connectDB };