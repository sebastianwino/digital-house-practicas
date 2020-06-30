const fs = require('fs')

let logMiddleware = (req, res, next) => {
    fs.appendFileSync('logs/userLogs.txt', 'El usuario ingresó a la ruta: ' + req.url + "\n" )
    next()
}

module.exports = logMiddleware