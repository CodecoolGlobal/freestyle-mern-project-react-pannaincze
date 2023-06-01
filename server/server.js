const mongoose = require('mongoose')
const express = require('express')
const Activity = require('./model/Activity')
const cors = require('cors');


const app = express()

app.use(express.json())

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001/') // update to match the domain you will make the request from
  res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
  next()
})
app.use(cors({
  origin: ['http://localhost:3001'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
}));

mongoose.connect("mongodb+srv://pannaincze:8LrZGgipeY9veHEy@cluster0.6y94z96.mongodb.net/", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

app.get('/favorites', async (req, res) => {
  const data = await Activity.find({});
  res.send(data)
})

app.post('/api/data', (req, res) => {

  const description = req.body.activity;
  const type = req.body.type;
  const participants = req.body.participants;
  const accessibility = req.body.accessibility;
  const price = req.body.price;
  const link = req.body.link;
  const image = req.body.image;
  const createdAt = Date.now();

  const activity = new Activity({
    description,
    type,
    participants,
    price,
    link,
    image,
    accessibility,
    link,
    createdAt
  });

  activity.save()
    .then(todo => res.json(todo))
    .catch(err => res.status(400).json({ success: false }));

});

app.delete('/favorites/:id', (req, res, next) => {
  Activity.findByIdAndDelete(req.params.id)
    .then(response => res.send(response))
    .catch(error => next(error))
})

app.patch('/favorites/:id', (req, res, next) => {
  let update = req.body

  Activity.findByIdAndUpdate(req.params.id, update, {
    new: true
  })
    .then(response => res.send(response))
    .catch(error => next(error))
})


app.listen(3000, () => console.log('Server started on port 3000'))