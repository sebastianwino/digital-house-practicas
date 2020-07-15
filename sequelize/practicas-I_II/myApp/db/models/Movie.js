module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: dataTypes.STRING,
            allowNull: false
        },
        rating: {
            type: dataTypes.DOUBLE.UNSIGNED,
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER.UNSIGNED
        },


    };
    let config = {
        tableName: "movies",
        timestamps: false,
        underscored: true,
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = models => {
        Movie.belongsTo(models.Genres, {
            as: 'genres',
            foreignKey: 'genre_id'
        })

        Movie.belongsToMany(models.Actors, {
            as: 'actors',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false           
        })
    }

    return Movie
}