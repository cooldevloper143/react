const mongoose = require('mongoose');

const mongoURl = "mongodb://localhost:27017/?directConnection=true";
const connectToMongo = () => {
    mongoose.connect('mongodb://localhost:27017/?directConnection=true', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('MongoDB connection error:', err);
        });
};



module.exports = connectToMongo;