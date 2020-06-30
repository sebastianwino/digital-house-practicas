const fs = require('fs')


let mainControllers = {
    root: (req, res, next) => {
        res.render('index', {
            color: req.session.color
        })
    },
    more: (req, res, next) => {
        res.render('more', {
            color: req.session.color
        })
    }
}

module.exports = mainControllers