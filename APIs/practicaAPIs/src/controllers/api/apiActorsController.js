let db = require('../../db/models')


let apiActorsController = {

    list: (req, res) => {
        db.Actors.findAll()
            .then(actors => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: actors.length,
                        url: "/api/actors"
                    },
                    data: actors
                }

                res.json(respuesta)
            })
            .catch(errors => {
                console.log(errors)
                res.send('Error!!!')
            })

    }

}

module.exports = apiActorsController