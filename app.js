var express = require('express')
var app = express()
var exphbs = require('express-handlebars')

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))
app.set('view engine', '.hbs')

require('./controllers/foaasControllers')(app)

app.listen(3000, function () {
  console.log('Listening on port 3000')
})