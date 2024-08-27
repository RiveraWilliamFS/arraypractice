const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
    model: {
        type: String,
        required: [true, "You are required to have an Board"],
        unique: [true, "You can only have one Board of that name"],
        trim: true,
        maxlength: [50, 'Your name is too long'],
    },
    length: {
        type: Number,  
        required: true,
    },
    width: {
        type: Number,  
        required: true,
    },
    brand: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    }, 

    genre: {
        type: [String], 
        required: true, 
        enum:[
            "model",
            "length",
            "width",
            "brand",
            "Other",
        ],
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("Board", boardSchema);