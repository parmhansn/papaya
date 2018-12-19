console.log("inside of shelter.js");

const mongoose = require("mongoose");


const ShelterSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, "Pet must have a name"], 
        minlength: [2, "Name must be at least 2 characters"],
        maxlength: [255]
    },
    type: {
        type: String, 
        required: [true, "Type is required"], 
        minlength: [2, "Type must be at least 2 characters"],
        maxlength: [255]
    },
    description: {
        type: String, 
        required: [true, "Description is required"], 
        minlength: [3, "Description must be at least 2 characters"],
        maxlength: [255]
    },

    skills: {
        
        skill1: {
            type: String, 
            maxlength: [255]
        },
        skill2: {
            type: String, 
            maxlength: [255]
        },
        skill3: {
            type: String, 
            maxlength: [255]
        }
    }

    


}, {timestamps: true});

mongoose.model('Shelter', ShelterSchema);