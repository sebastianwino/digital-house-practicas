const fs = require('fs')

let mainControllers = {
    root: (req, res) => {
        res.render('index')
    }
}

module.exports = mainControllers