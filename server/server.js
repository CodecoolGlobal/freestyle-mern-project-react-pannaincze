const mongoose = require('mongoose')
const express = require('express')

const app = express()

app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001/') // update to match the domain you will make the request from
  res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  next()
})

mongoose.connect("mongodb+srv://pannaincze:8LrZGgipeY9veHEy@cluster0.6y94z96.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.listen(3000, () => console.log('Server started on port 3000'))
