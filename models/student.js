/**
*  Student model
*  Describes the characteristics of each attribute in a Student resource.
*
* @author Santhosh kumar Bollena
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },
    given: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    family: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true,
        unique: true
    },
    gpa: {
        type: Number,
        minimum: 0,
        maximum: 4,
        required: true,
        default: '0.0'
    },
    github: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
        unique: true
    },
    website: {
        type: String,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    sectionId: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('Student', StudentSchema)