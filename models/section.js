const mongoose = require('mongoose')
const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SectionNumber: {
    type: String,
    minlength: 0,
    maxlength: 2,
    required: true,
    default: 'Section Number'
  },
  Days: {
    type: String,
    minlength: 1,
    maxlength: 7,
    required: true,
    default: 'Days'
  },
  StartTime: {
    type: Number,
    minlength: 0,
    maxlength: 30,
    required: true,
    default: 'StartTime'
  },
  RoomNumber: {
    type: String,
    minlength: 0,
    maxlength: 30,
    required: true
  },
  InstructorId: {
    type: String,
    minlength: 0,
    maxlength: 30,
    required: true

  },
  CourseId: {
    type: String,
    minlength: 0,
    maxlength: 30,
    required: true
  }
})
module.exports = mongoose.model('Developer', DeveloperSchema)
