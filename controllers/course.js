/**
*  Course controller
*  Handles requests related to course resources.
*
* @author Sumanth Gorantla <gorantlasumanth96@gmail.com>
*
*/
const express = require('express')
const api = express.Router()

const find = require('lodash.find')

const notfoundstring = 'Could not find student with id='

api.get('/findall', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const data = req.app.locals.courses.query
  res.send(JSON.stringify(data))
})


api.get('/findone/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  const id = parseInt(req.params.id)
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.send(JSON.stringify(item))
})


// GET to this controller base URI (the default)
api.get('/', (req, res) => {
  res.render('course/index.ejs', {
    courses: req.app.locals.courses.query
  })
})

// GET create
api.get('/create', (req, res) => {
  res.render('course/create', {
    courses: req.app.locals.courses.query,
    course: new Model()
  })
})

// GET /delete/:id
api.get('/delete/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/delete', {
    course: item
  })
})

// GET /details/:id
api.get('/details/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/details', {
    course: item
  })
})

// GET one
api.get('/edit/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const data = req.app.locals.courses.query
  const item = find(data, { _id: id })
  if (!item) { return res.end(notfoundstring + id) }
  res.render('course/edit', {
    course: item
  })
})

// HANDLE EXECUTE DATA MODIFICATION REQUESTS --------------------------------------------

// POST new
api.post('/save', (req, res) => {
  console.info(`Handling POST ${req}`)
  console.debug(JSON.stringify(req.body))
//   const item = new Model()
//   console.info(`NEW ID ${req.body._id}`)
//   item._id = parseInt(req.body._id)
//   item.email = req.body.email
//   item.given = req.body.given
//   item.family = req.body.family
//   item.city = req.body.city
//   item.state = req.body.state
//   item.zip = req.body.zip
//   item.country = req.body.country
  res.send(`THIS FUNCTION WILL SAVE A NEW course ${JSON.stringify(item)}`)
})

// POST update with id
api.post('/save/:id', (req, res) => {
  console.info(`Handling SAVE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling SAVING ID=${id}`)
  res.send(`THIS FUNCTION WILL SAVE CHANGES TO AN EXISTING course with id=${id}`)
})

// DELETE id (uses HTML5 form method POST)
api.post('/delete/:id', (req, res) => {
  console.info(`Handling DELETE request ${req}`)
  const id = parseInt(req.params.id)
  console.info(`Handling REMOVING ID=${id}`)
  res.send(`THIS FUNCTION WILL DELETE FOREVER THE EXISTING course with id=${id}`)
})

module.exports = api