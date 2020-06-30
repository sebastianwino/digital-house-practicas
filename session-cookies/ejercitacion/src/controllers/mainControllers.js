const fs = require('fs')

let mainControllers = {
    root: (req, res, next) => {
        res.render('index', {
            accept_cookies : req.cookies.accept_cookies == 'true'
        })
    },
    more: (req, res, next) => {
        res.render('more', {
            accept_cookies : req.cookies.accept_cookies == 'true'
        })
    }
}

module.exports = mainControllers