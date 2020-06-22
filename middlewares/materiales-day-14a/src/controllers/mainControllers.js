const fs = require('fs')

let mainControllers = {
    root: (req, res) => {
        res.send('Bienvenido')
    }
}

module.exports = mainControllers