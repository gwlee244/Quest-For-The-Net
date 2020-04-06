module.exports = (sequelize, Sequelize) => {
    Match = sequelize.define('Match', {
      "MatchId": Sequelize.INTEGER,
      "UserId": Sequelize.INTEGER
    });
  
    Match.associate = (models) => {
      models.Match.belongsTo(models.User);
      models.Match.belongsTo(models.Team);
    }
  
    Match.sync({ force:true });
    return Match;
  };