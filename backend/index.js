const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // To parse JSON bodies

// Home route
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Get current user info
app.get('/me', (req, res) => {
  res.json({ message: 'User info route', user: { id: 1, name: 'John Doe' } })
})

// Login for user and admin
app.post('/login', (req, res) => {
  const { username, password } = req.body
  // Dummy authentication logic
  if (username === 'admin' && password === 'admin123') {
    res.json({ role: 'admin', message: 'Admin logged in' })
  } else {
    res.json({ role: 'user', message: 'User logged in' })
  }
})

// Signup for user and admin
app.post('/signup', (req, res) => {
  const { username, password, role } = req.body
  res.json({ message: `${role} signed up successfully`, data: { username } })
})

// Post a course (accessible to users or instructors)
app.post('/post_a_courses', (req, res) => {
  const courseData = req.body
  res.json({ message: 'Course posted successfully', course: courseData })
})

// Get all courses
app.get('/get_all_courses', (req, res) => {
  res.json({
    message: 'All courses',
    courses: [
      { id: 1, title: 'React Basics' },
      { id: 2, title: 'Node.js Fundamentals' }
    ]
  })
})

// Get purchased courses (for the logged-in user)
app.get('/get_purchased_courses', (req, res) => {
  res.json({
    message: 'Purchased courses',
    purchased: [
      { id: 2, title: 'Node.js Fundamentals' }
    ]
  })
})

// Admin: Create a course
app.post('/admin/create_a_course', (req, res) => {
  const newCourse = req.body
  res.json({ message: 'Course created by admin', course: newCourse })
})

// Admin: Edit a course
app.put('/admin/edit_course', (req, res) => {
  const updatedCourse = req.body
  res.json({ message: 'Course edited by admin', updated: updatedCourse })
})

// Admin: Add course content
app.post('/admin/add_course_content', (req, res) => {
  const content = req.body
  res.json({ message: 'Course content added', content })
})

// Admin: Delete a course
app.delete('/admin/delete_a_course', (req, res) => {
  const { courseId } = req.body
  res.json({ message: `Course with ID ${courseId} deleted` })
})

// Start the server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
