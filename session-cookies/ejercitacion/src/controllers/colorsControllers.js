const fs = require('fs')

let colorsControllers = {
    setColor: (req, res, next) => {

        if (req.query.bgColor != undefined) {
            res.cookie('saveColor', req.query.bgColor), {maxAge: 240000}
        }

        req.session.color = req.query.bgColor

        res.render('colors', {color: req.session.color})
    }
}

module.exports = colorsControllers