let db = require('../db/models')

let moviesControllers = {
    list: (req, res) => {
        db.Movies.findAll()
            .then(movies => {
                res.render('moviesList', {movies: movies})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    add: (req, res) => {

    },
    create: (req, res) => {

    },
    /* A terminar */
    delete: (req, res) => {
        db.Movies.findByPk(req.params.id)


        .then(movieToDelete => {
            res.send('Movie deleted')
        })
        .catch(errors => {
            console.log(errors)
            res.send('Error!!!')
        })

    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id)
            .then(movieDetail => {
                res.render('movieDetail', {movie: movieDetail})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    drama: (req, res) => {
        db.Movies.findAll({
            where: {
                genre_id: 3
            }
        })
            .then(movies => {
                res.render('moviesDrama', {movies: movies})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    recommended: (req, res) => {
        db.Movies.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            }
        })
            .then(movies => {
                res.render('topMovies', {movies: movies})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    totalTime: (req, res) => {
        db.Movies.sum("length")
            .then(moviesTotalTimes => {
                res.render('moviesTotalTimes', {moviesTotalTimes: moviesTotalTimes})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    new: (req, res) => {
        db.Movies.findAll({
            order: [
                ["release_date", "DESC"]
            ],
            limit: 5
        })
            .then(newMovies => {
                res.render('newMovies', {movies: newMovies})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    /* Corregir */
    search: (req, res) => {
        db.Movies.findAll({
            where: {
                title: {
                    [db.Sequelize.Op.substring]: req.query.search
                }
            }
        })
            .then(moviesResult => {
                res.render('moviesResult', {movies: moviesResult})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    }

}

module.exports = moviesControllers