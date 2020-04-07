var db = require("../models");

module.exports = function(app) {
app.get("/api/games", function(req, res) {
db.Game.findAll({
include: [db.User]
}).then(function(dbGame) {
res.json(dbGame);
});
});
}