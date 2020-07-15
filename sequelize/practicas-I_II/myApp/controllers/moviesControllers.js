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
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id, {
            include: [
                {association: 'genres'},
                {association: 'actors'}
            ]
        })
            .then(movieDetail => {
                res.render('movieDetail', {movie: movieDetail})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    add: (req, res) => {
        res.render('createMovie')
    },
    create: (req, res) => {
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length 
        })

        res.redirect('/movies')

    },
    edit: (req, res) => {
        db.Movies.findByPk(req.params.id, {
            include: [{association: 'genres'}]
        })
            .then(movieToEdit => {
                res.render('editMovie', {movie: movieToEdit})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })
    },
    update: (req, res) => {
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length 
        },  {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies/detail/' + req.params.id)

    },
    delete: (req, res) => {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies')
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