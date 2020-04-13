
module.exports = (sequelize, Sequelize) => {

    const Developer = sequelize.define('Developer', {
        names: {
            type: Sequelize.STRING,
            notEmpty: true,

        },
        email: {
            type: Sequelize.STRING,
            notEmpty: true,

        },

        github: {
            type: Sequelize.STRING,
            notEmpty: true,

        },
        link: {
            type: Sequelize.STRING,
            notEmpty: true,

        }
    },
    {
        timestamps: false
    }
    );

    Developer.sync();
    return Developer;
};