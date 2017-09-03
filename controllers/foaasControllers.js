function foaasControllers(app){
  
  app.get('/momma/:from/:to', function(req, res) {
      res.format({
        html: function () {
          res.render('home', {
            "message": "Hey " + req.params.to + " Yo momma is so fat, I took a picture of her last Christmas and it's still printing.",
            "from": "Love " + req.params.from
          }
        )},
      default: function () {
          res.json({  
            "message": "Hey " + req.params.to + " Yo momma is so fat, I took a picture of her last Christmas and it's still printing.",
            "from": "Love " + req.params.from 
          })
      }
      })
  })

    app.get('/marble/:from/:to', function(req, res) {
      res.format({
        html: function () {
          res.render('home', {
            "message": "Hey " + req.params.to + " you're as sharp as a marble.",
            "from": "Love " + req.params.from
          }
        )},
      default: function () {
          res.json({  
            "message": "Hey " + req.params.to + " you're as sharp as a marble.",
            "from": "Love " + req.params.from 
          })
      }
      })
  })

      app.get('/poopoo/:from/:to', function(req, res) {
      res.format({
        html: function () {
          res.render('home', {
            "message": req.params.to + " you're a poo poo head.",
            "from": "Love " + req.params.from
          }
        )},
      default: function () {
          res.json({  
            "message": req.params.to + " you're a poo poo head.",
            "from": "Love " + req.params.from 
          })
      }
      })
  })

}


module.exports = foaasControllers