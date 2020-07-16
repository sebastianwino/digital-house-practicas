let db = require('../db/models')

/* Terminar validaciones */

let moviesControllers = {
    list: (req, res) => {
        db.Movies.findAll()
            .then(movies => {
                res.render('movies/moviesList', {movies: movies})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    detail: (req, res) => {
        db.Movies.findByPk(req.params.id, {
            include: [
                {association: 'genre'},
                {association: 'actors'}
            ]
        })
            .then(movieDetail => {
                if(movieDetail) {
                    res.render('movies/movieDetail', {movie: movieDetail})
                } else {
                    res.redirect('/no-encontrado');
                }
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    add: (req, res) => {
        db.Genres.findAll()
            .then(genres => {
                res.render('movies/createMovie', {genres: genres})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })
    },
    create: (req, res) => {
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length,
            genre_id: req.body.genre_id
        })

        res.redirect('/movies')

    },
    edit: (req, res) => {
        let movieEdit = db.Movies.findByPk(req.params.id, {
            include: [{association: 'genre'}]
        })
        let genresEdit = db.Genres.findAll()
        
        Promise.all([movieEdit, genresEdit])
            .then(([movie, genres]) => {
                if(movie) {
                    res.render('movies/editMovie', {movie: movie, genres: genres})
                } else {
                    res.redirect('/no-encontrado');
                }
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
            length: req.body.length,
            genre_id: req.body.genre_id
        },  {
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies/' + req.params.id)

    },
    delete: (req, res) => {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })

        res.redirect('/movies')
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
                res.render('movies/moviesResult', {movies: moviesResult})
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    }

}

module.exports = moviesControllers