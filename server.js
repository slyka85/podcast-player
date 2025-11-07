const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('helloooooo world')
})

app.listen(3000)
