const mongoose = require('mongoose')
const express = require('express')
const Activity = require('./model/Activity')

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


app.post('/api/data', (req, res) => {
  console.log('asd')
  
  const description = req.body.description;
  const type = req.body.type;
  console.log(type)
  const participiants = req.body.participiants;
  const accessibility = req.body.accessibility;
  const link = req.body.link;
  const image = req.body.image;
  const createdAt = Date.now();

  const activity = new Activity({
    description: "Play a video game",
    type: "recreational",
    participants: 1,
    price: 0,
    link: "",
    accessibility: 0,
    link: "",
    createdAt
  });

  activity.save()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json({ success: false }));

});
