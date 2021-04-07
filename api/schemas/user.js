const mongoose = require("mongoose"); 


//what should the user need to have? 
const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true, 
        trim: true,
        min: 2,
        max: 255
    },
    googleId: {
        type: String, 
        required: true, 
        trim: true, 
    }, 
    date: {
        type: Date, 
        default: Date.now, 
    }
})

module.exports = mongoose.model("User", userSchema); 