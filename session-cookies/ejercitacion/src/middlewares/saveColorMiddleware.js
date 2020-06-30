let saveColorMiddleware = (req, res, next) => {

    if (req.cookies.saveColor && (req.session.color == undefined)) {
        req.session.color = req.cookies.saveColor
    }
    next()
}

module.exports = saveColorMiddleware