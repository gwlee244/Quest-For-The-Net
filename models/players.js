module.exports = (sequelize, Sequelize) => {

    const Player = sequelize.define('Player', {
  
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
  
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
  
        positionname: {
            type: Sequelize.TEXT,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
  
        pointspergame: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
        freethrowpercent: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
  
        steals: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        rebounds: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        blocks: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        assists: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        overallstats: {
            type: Sequelize.INTEGER,
            notEmpty: true,
            validate: {
                len: [1]
            }
        }

    });
  
    // Player.associate = (models) => {
  
    //   models.Player.belongsTo(models.Team, {
    //       through: models.Match
    //   });
    // };
  
    Player.sync();
    return Player;
    
  };