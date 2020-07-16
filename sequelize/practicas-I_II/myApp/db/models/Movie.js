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
            type: dataTypes.STRING(500),
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
        deleted_at: {
            type: dataTypes.DATE,
        }
    };
    let config = {
        tableName: "movies",
        timestamps: false,
        underscored: true,
        paranoid: true
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = models => {
        Movie.belongsTo(models.Genres, {
            as: 'genre',
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