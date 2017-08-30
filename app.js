var express = require('express')
var app = express()

require('./controllers/foaasControllers')(app)

app.listen(3000, function () {
  console.log('Listening on port 3000')
})