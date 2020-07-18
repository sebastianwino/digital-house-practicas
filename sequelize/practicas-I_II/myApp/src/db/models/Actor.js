module.exports = (sequelize, dataTypes) => {
    let alias = "Actors";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        last_name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        rating: {
            type: dataTypes.DOUBLE.UNSIGNED,
        }

    };
    let config = {
        tableName: "actors",
        timestamps: false,
        underscored: true,
    }

    const Actor = sequelize.define(alias, cols, config);

    Actor.associate = models => {
        Actor.belongsToMany(models.Movies, {
            as: 'movies',
            through: 'actor_movie',
            foreignKey: 'actor_id',
            otherKey: 'movie_id',
            timestamps: false   
        })
    }

    return Actor
}