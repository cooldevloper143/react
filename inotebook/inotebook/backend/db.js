const mongoose = require('mongoose');
const mongoURl = "mongodb://localhost:27017/?directConnection=true";



const connectToMongo = ()=>{
    mongoose.connect(mongoURl, ()=>{
        console.log('Connected to MongoDB');
    });
}

module.exports = connectToMongo;