const Datastore = require('nedb') // set up a temporary (in memory) database
const developerData = require('../data/developers.json') // read in data file
const studentsData = require('../data/students.json')
const coursesData = require('../data/courses.json')
const sectionsData = require('../data/sections.json')

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  console.log('START data seeder.')
  const db = {} // empty object to hold all collections
  const studentdb={}
  const coursedb={}
  const sectiondb={}



  
  db.developers = new Datastore() // new object property

  studentdb.students=new Datastore()
  coursedb.courses=new Datastore()
  sectiondb.sections=new Datastore()

  db.developers.loadDatabase() // call the loadDatabase method
  studentdb.students.loadDatabase()
  coursedb.courses.loadDatabase()
  sectiondb.sections.loadDatabase()

  // insert the sample data into our datastore
  studentdb.students.insert(studentsData)
  coursedb.courses.insert(coursesData)
  sectiondb.sections.insert(sectionsData)
  db.developers.insert(developerData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.students=studentdb.students.find(studentsData)
  app.locals.courses=coursedb.courses.find(coursesData)
  app.locals.sections=sectiondb.sections.find(sectionsData)
  app.locals.developers = db.developers.find(developerData)

  console.log(`${app.locals.developers.query.length} developers seeded`)
  console.log(`${app.locals.students.query.length} students seeded`)
  console.log(`${app.locals.sections.query.length} sections seeded`)
  console.log(`${app.locals.courses.query.length} courses seeded`)
  console.log('END Data Seeder. Sample data read and verified.')
}
