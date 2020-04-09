var db = require("../models");

module.exports = function(app) {
 app.get("/api/all", (req, res) => {
    db.User.findAll({
      include: [db.Game],
      order: [ ["lastname", "DESC"] ]
    }).then( (dbPlayers) => {
      res.json(dbPlayers);
    }).catch((err) => {
      res.render('players', {
        error: err
      });
    });
});
}