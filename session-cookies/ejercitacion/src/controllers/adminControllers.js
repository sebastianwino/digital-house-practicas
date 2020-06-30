const fs = require('fs')

let adminControllers = {
    index: (req, res) => {
        res.send(`Hola Admin: ${req.query.user}`)
     

    }
}

module.exports = adminControllers