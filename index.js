// const app = require('express')()

const express = require('express')
const app = express()

app.get('/', (request, response, next) => {
    console.log(request)
    // response.send('Success!')
    response.json({ name: 'Izzy', numbers: [1,2,3,4]})
  }
)

// using parameters
app.get('/users/:id' , (req, res) => {
  console.log(req.params);
  res.send(`The user id is: ${req.params.id}`)
})

// using parameters
app.get('/greeting/:timeOfDay/:name' , (req, res) => {
  console.log(req.params);
  let { timeOfDay, name } = req.params
  res.send(`Good ${timeOfDay}, ${name}`)
})

// using queries
app.get('/schmancy', (req, res) => {
  console.log(req.query)
  let { fancy } = req.query
  let response = 'This is a normal response.'
  if (Boolean(fancy)) {
    response = response.split(' ').map(word => `schm${word.toLowerCase()}`).join(' ')
  }
  res.send(response)
})

// serving files
app.get('/about', (req, res) => {
  res.sendFile(`${__dirname}/about.html`)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});