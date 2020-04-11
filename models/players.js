

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
            type: Sequelize.STRING,
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
  
        pointspergame: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        fieldgoal: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        threepoint: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        freethrowpercent: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        rebounds: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },

        assists: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
  
        steals: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },


        blocks: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },


        overallstats: {
            type: Sequelize.DECIMAL (5,1),
            notEmpty: true,
            validate: {
                len: [1]
            }
        },
        
        picked: {
            type: Sequelize.BOOLEAN,
            defaultValue: 0
        },

    },
    {
    timestamps: false
    }
    );
  
    // Player.associate = (models) => {
  

    //   models.Player.belongsTo(models.Game, {
    //       through: models.UserGame

    
  
    Player.sync();
    return Player;
    
  };
