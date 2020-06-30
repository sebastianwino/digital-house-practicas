const fs = require('fs')

let colorsControllers = {
    colors: (req, res, next) => {
        req.session.color = req.query.bgColor
        res.render('colors', {color: req.session.color})
    }
}

module.exports = colorsControllers