const mongoose = require("mongoose");

const shoeSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: [true, "You are required to have an shoe"],
        unique: [true, "You can only have one shoe of that name"],
        trim: true,
        maxlength: [50, 'Your name is too long'],
    },
    size: {
        type: Number,  
        required: true,
    },
    model: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [50, "Description cannot be more than 50 characters"],
    }, 
    color: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [50, "Description cannot be more than 50 characters"],
    }, 

    genre: {
        type: [String], 
        required: true, 
        enum:[
            "brand",
            "size",
            "model",
            "color",
            "Other",
        ],
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("shoe", shoeSchema);