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

// POST route for creating a new game
app.post("/api/games", function(req, res) {
  db.Game.create({
    date: req.body.date,
    time: req.body.time,
    location: req.body.location,
    max_players: req.body.max_players
  }).then(function() {
    res.redirect("/games");
  }).catch((err) => {
    res.render('games', {
      error: err
    });
    // Handle any error that occurred in any of the previous
    // promises in the chain.
  });
});

app.post("/api/games", function(req, res) {
  db.UserGame.create({
      GameId: req.params.GameId,
      UserId: req.params.UserId
  }).then(function(){
      res.redirect("/games");
  }).catch((err) => {
      res.render('games', {
        error: err
      });
      // Handle any error that occurred in any of the previous
      // promises in the chain.
    });
});
}