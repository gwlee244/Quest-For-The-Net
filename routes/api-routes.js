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

app.put('/api/players/:id', function(request, res) {
  db.Player.update(

      {
          picked: request.body.devoured
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

// GET route for getting all gams
app.get('/api/games', (req, res) => {
  db.Game.findAll({
    include: [db.User], 
    order: [ ["date", "DESC"] ]
  }).then(function(dbGame) {
    res.json(dbGame);
  }).catch((err) => {
    res.render('games', {
      error: err
    });
    // Handle any error that occurred in any of the previous
    // promises in the chain.
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
// POST route for creating userGames
// NEWEST ROUTE
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
// Checking to see if there are players in a game.
// Updating the game table to full if there are enough players
// Adding a player to a userGame if not full.
//still in progress
app.get("/api/games", (req, res) => {
  db.UserGame.findAll({
      include: [db.Game, db.User],
      where: {
          GameId: req.params.GameId,
          UserId: req.params.UserId,
      }
  }).then(function(currentPlayers) {
      res.json(currentPlayers);
      if (currentPlayers.length >= maxPlayers) {
          //could change this alert to whatever
          alert("Game is Full. Please join another.");
          //query to 
              db.Game.update({
                  max_players: {
                      notEmpty: false
                  }
              }).then(function (updateMaxPlayers) {
                  res.json(updateMaxPlayers);
              });
          } else {
              app.put("/api/games", function(req, res) {
                  db.UserGame.update({
                      where:{
                          gameId: req.params.GameId,
                          UserId: req.params.UserId
                      }
                  }).then(function(dbUpdateUserGames) {
                      console.log(dbUpdateUserGames);
                      res.json(dbUpdateUserGames);
                  });
              })
          };
      }
  )
});
app.delete('/api/games/:id', function(request, res) {
  db.Game.destroy(
      {
          where: {
              id: request.params.id
          }
      }
  ).then( (dbGames) => {
    res.json(dbGames);
    res.status(200).end();
  }).catch((err) => {
    res.status(401).json(err);
  })
});

app.get("/api/developer", (req, res) => {
  db.Developer.findAll({
   // include: [db.Game],
    order: [ ["names", "DESC"] ]
  }).then( (dbDeveloper) => {
    res.json(dbDeveloper);
  }).catch((err) => {
    res.render('Developers', {
      error: err
    });
  });
});


}