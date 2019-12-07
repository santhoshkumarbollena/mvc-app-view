/**
 * @router.js - manages all routing
 *
 * router.get when assigning to a single request
 * router.use when deferring to a controller
 *
 * @requires express
 */

const express = require('express')

console.log('START routing')

const router = express.Router()


// Manage top-level request first
router.get('/', (req, res, next) => {

  res.render('index', { title: 'MVC' })
})


router.get('/index', (req, res, next) => {
  res.render('index', { title: 'MVC' })
})


// Defer path requests to a course controller
router.use('/course', require('../controllers/course.js'))



// Manage top-level request first
router.get('/course', (req, res, next) => {
  
  // res.sendFile('index.html')
  res.render('index')
})

// Defer path requests to a student controller
router.use('/student', require('../controllers/student.js'))

// Manage top-level request first
router.get('/student', (req, res, next) => {
  res.render('index')
})


// Defer path requests to a student controller
router.use('/section', require('../controllers/section.js'))
// Manage top-level request first
router.get('/section', (req, res, next) => {
  res.render('index')
})

console.log('END routing')
module.exports = router
