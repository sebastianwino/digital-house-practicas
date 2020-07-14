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
            type: dataTypes.DECIMAL.UNSIGNED,
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

    const Movies = sequelize.define(alias, cols, config);

    return Movies
}