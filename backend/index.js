const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/me', (req, res) => {
  // route for getting current user info
})

app.post('/login', (req, res) => {
  // route for getting current user info
  //For both user and admin login
})

app.post('/signup', (req, res) => {
  // route for getting current user info
  //For both user and admin signup
})

app.post('/post_a_courses', (req, res) => {
  // route for getting current user info
})

app.get('/get_all_courses', (req, res) => {
  // route for getting current user info
})

app.get('/get_purchased_courses', (req, res) => {
  // route for getting current user info
})

app.post('/admin/create_a_course', (req, res) => {
  // route for getting current user info
})


app.put('/admin/edit_course', (req, res) => {
  // route for getting current user info
})

app.post('/admin/add_course_content', (req, res) => {
  // route for getting current user info
})

app.delete('/admin/delete_a_course', (req, res) => {
  // route for getting current user info
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})