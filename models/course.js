const mongoose = require('mongoose')

const CourseSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SchoolNumber: {
    type: String,
    minlength: 2,
    maxlength: 2,
    required: true,
    default: "44"
  },
  CourseNumber: {
    type: String,
    minlength: 3,
    maxlength: 3,
    required: true
  },
  Name: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: true
  },
  inSpring: {
    type: Boolean,
    required: true
  },
  inSummer: {
    type: Boolean,
    required: true
  },
  inFall: {
    type: Boolean,
    required: true
  }
})
module.exports = mongoose.model('Course', CourseSchema)
