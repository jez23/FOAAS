function foaasControllers(app){
  app.get('/smell/:from/:to', function(req, res) {
      res.format({
        html: function () {
          res.render('home', {
            "message": "Hey " + req.params.to + " Yo momma is so fat, I took a picture of her last Christmas and it's still printing.",
            "from": req.params.from
          }
        )},
      default: function () {
          res.json({  
            "message": "Hey " + req.params.to + " Yo momma is so fat, I took a picture of her last Christmas and it's still printing.",
            "from": req.params.from 
          })
      }
      })
  })
}


module.exports = foaasControllers