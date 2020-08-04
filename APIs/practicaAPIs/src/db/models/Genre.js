module.exports = (sequelize, dataTypes) => {
    let alias = "Genres";
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        }

    };
    let config = {
        tableName: "genres",
        timestamps: false,
        underscored: true,
    }

    const Genre = sequelize.define(alias, cols, config);

    Genre.associate = models => {
        Genre.hasMany(models.Movies, {
            as: 'movies',
            foreignKey: 'genre_id'
        })
    }

    return Genre
}