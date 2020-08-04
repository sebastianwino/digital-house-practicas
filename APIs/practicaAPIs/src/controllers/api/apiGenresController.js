let db = require('../../db/models')


let apiGenresController = {

    list: (req, res) => {
        db.Genres.findAll()
            .then(genres => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: "/api/genres"
                    },
                    data: genres
                }

                res.json(respuesta)
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    }

}

module.exports = apiGenresController