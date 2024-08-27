const mongoose = require("mongoose");

const skaterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "You are required to have an Shoe"],
        unique: [true, "You can only have one shoe of that name"],
        trim: true,
        maxlength: [50, 'Your name is too long'],
    },
    age: {
        type: Number,  
        required: true,
    },
    weight: {
        type: Number,  
        required: true,
    },

    sponsor: {
        type: String,
        required: [true, "Please add a description"],
        maxlength: [500, "Description cannot be more than 500 characters"],
    }, 

    genre: {
        type: [String], 
        required: true, 
        enum:[
            "name",
            "age",
            "weight",
            "sponsor",
            "Other",
        ],
    }
}, 
{ timestamps: true });

module.exports = mongoose.model("Skater", skaterSchema);