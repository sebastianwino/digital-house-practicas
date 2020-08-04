let db = require('../../db/models')


let apiMoviesController = {

    list: (req, res) => {
        db.Movies.findAll()
            .then(movies => {
                movies.forEach(movie => {
                    movie.setDataValue('endpoint', '/api/movies/' + movie.id)
                });

                let respuesta = {
                    meta: {
                        status: 200,
                        total: movies.length,
                        url: "/api/movies"
                    },
                    data: movies
                }

                res.json(respuesta)
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
                    movieDetail.setDataValue('endpoint', '/api/movies/' + movieDetail.id)

                    let respuesta = {
                        meta: {
                            status: 200,
                            url: `/api/movies/${movieDetail.id}`
                        },
                        data: movieDetail
                    }

                    res.json(respuesta)
                } else {
                    res.json('no-encontrado');
                }
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    },
    create: (req, res) => {
        db.Movies.create(req.body)
            .then( movie => {
                console.log(movie)
                res.json({mesagge: "Created"})
            })
    },
    update: (req, res) => {
        db.Movies.update(req.body, {
            where: {
                id: req.params.id
            }
        })
            .then( movie => {
                console.log(movie)
                res.json({mesagge: "Edited"})
            })
    },
    delete: (req, res) => {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        })
            .then( movie => {
                console.log(movie)
                res.json({mesagge: "Deleted"})
            })
    }
}

module.exports = apiMoviesController