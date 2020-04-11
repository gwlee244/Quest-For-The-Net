var db = require("../models");

module.exports = function(app) {
 app.get("/api/all", (req, res) => {
    db.Player.findAll({
     // include: [db.Game],
      order: [ ["lastname", "DESC"] ]
    }).then( (dbPlayers) => {
      res.json(dbPlayers);
    }).catch((err) => {
      res.render('players', {
        error: err
      });
    });
});

app.put('/api/players/:id', function(request, response) {
  db.Player.update(

      {
          add: request.body.devoured
      },

      {
          where: {
              id: request.params.id
          }
      }
  ).then( (dbPlayers) => {
    res.json(dbPlayers);
  }).catch((err) => {
    res.render('players', {
      error: err
  })
});

});

app.delete('/api/players/:id', function(request, res) {
  db.Player.destroy(
      {
          where: {
              id: request.params.id
          }
      }
  ).then( (dbPlayers) => {
    res.status(200).end();
  }).catch((err) => {
    res.status(401).json(err);
  })
});

}
