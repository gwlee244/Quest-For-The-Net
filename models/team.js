module.exports = (sequelize, Sequelize) => {
    const Team = sequelize.define('Team', {
        date: {
            type: Sequelize.DATE,
            notEmpty: true
        },
        time: {
            type: Sequelize.TIME,
            notEmpty: true
        },
        location: {
            type: Sequelize.TEXT,
            notEmpty: true,
            validate: {
              len: [1, 16]
          }
        },
        max_players: {
          type: Sequelize.INTEGER,
          notEmpty: true,
          validate: {
            min: { args: 8, error: "Choose between 8-12" },
            max: { args: 12, error: "Choose between 8-12" },
          }
        }
    });
  
    Team.associate = (models) => {
      models.Team.belongsToMany(models.User, {
        through: models.Match
      })
    };
    Team.sync();
    return Team;
  };