/**
*  Student model
*  Describes the characteristics of each attribute in a Student resource.
*
* @author Santhosh Kumar Bollena
* @requires mongoose
*
*/
const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },
    Given: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    Family: {
        type: String,
        minlength: 3,
        maxlength: 100,
        required: true
    },
    Email: {
        type: String,
        minlength: 5,
        maxlength: 100,
        required: true,
        unique: true
    },
    GPA: {
        type: Number,
        minimum: 0,
        maximum: 4,
        required: true,
        default: '0.0'
    },
    Github: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true,
        unique: true
    },
    Website: {
        type: String,
        minlength: 5,
        maxlength: 100,
        unique: true
    },
    SectionId: {
        type: Number,
        required: true
    }
})
module.exports = mongoose.model('Student', StudentSchema)