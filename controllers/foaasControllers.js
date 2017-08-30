function foaasControllers(app){
  app.get('/smell/:from/:to', function(req, res) {
    res.send ({
      "message": "You smell bad " + req.params.to,
      "from": req.params.from
    })
  })

   app.get('/momma/:from/:to', function(req, res) {
    res.send ({
      "message": "Hey " + req.params.to + " Yo momma is so fat, I took a picture of her last Christmas and it's still printing.",
      "from": req.params.from
    })
  })
}

module.exports = foaasControllers