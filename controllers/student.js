/**
*  Developer controller
*  Handles requests related to developer resources.
*
* @author Santhosh Kumar Bollena <bollenasanthosh@gmail.com>
*
*/
const express = require('express')
const api = express.Router()

const find = require('lodash.find')

const notfoundstring = 'Could not find student with id='

api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.students.query
  res.send(JSON.stringify(data))
})


api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.students.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})


// GET to this controller base URI (the default)
api.get('/', (req, res) => {
  res.render('student/index.ejs', {
    students: req.app.locals.students.query
  })
})

// GET create
api.get('/create', (req, res) => {
  res.render('student/create', {
    students: req.app.locals.students.query,
    student: new Model()
  })
})

// GET /delete/:id
api.get('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.students.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('student/delete', {
    student: item
  })
})

// GET /details/:id
api.get('/details/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.students.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('student/details', {
    student: item
  })
})

// GET one
api.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.students.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('student/edit', {
    student: item
  })
})

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', (req, res) => {
  console.info(`Handling POST ${req}`)
  console.debug(JSON.stringify(req.body))
  // const student = new Model()
  // console.info(`NEW ID ${req.body._id}`)
  // student._id = parseInt(req.body._id)
  // student.Given = req.body.Given
  // student.Family = req.body.Family
  // student.Email = req.body.Email
  // student.GPA = parseInt(req.body.GPA)
  // student.GitHub = req.body.GitHub
  // student.Website=req.body.Website
  // student.SectionId = parseInt(req.body.SectionId)
 
  res.send(`THIS FUNCTION WILL SAVE A NEW student `)
})

// POST update with id
api.post('/save/:id', (req, res) => {
  console.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling SAVING ID=${id}`)
  res.send(`THIS FUNCTION WILL SAVE CHANGES TO AN EXISTING student with id=${id}`)
})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {
  console.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling REMOVING ID=${id}`)
  res.send(`THIS FUNCTION WILL DELETE FOREVER THE EXISTING student with id=${id}`)
})

module.exports = api
