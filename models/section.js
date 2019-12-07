const mongoose = require('mongoose')

const SectionSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  SectionNumber: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
    unique: true
  },
  Days: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  StartTime: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  RoomNumber: {
    type: String,
    minlength: 1,
    maxlength: 100,
    required: true,
    default: 'Maryville'
  },
  InstructorID: {
    type: String,
    minlength:1,
    maxlength: 100,
    required: true,
    default: 'MO'
  },
  CourseID: {
    type: String,
    minlength: 1,
    maxlength: 12,
    required: true,
    default: '64468'
  }

})
module.exports = mongoose.model('Section', SectionSchema)
