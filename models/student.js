const mongoose = require('mongoose')
const DeveloperSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  Given: {
    type: String,
    minlength: 0,
    maxlength: 30,
    required: true,
    default: 'Given Name'
  },
  Family: {
    type: String,
    minlength: 0,
    maxlength: 30,
    required: true,
    default: 'Family Name'
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
    default: 'GPA'
  },
  GitHub: {
    type: String,
    minlength: 0,
    maxlength: 30,
    required: true

  },
  Website: {
    type: String,
    minlength: 0,
    maxlength: 30,
    required:true

  },
  SectionId: {
    type: Number,
    minlength: 0,
    maxlength: 30,
    required:true

  }
})
module.exports = mongoose.model('Developer', DeveloperSchema)
