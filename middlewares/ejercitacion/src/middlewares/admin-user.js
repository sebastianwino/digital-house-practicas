module.exports = function(req, res, next) {
    let expected = ['Ada', 'Greta', 'Vim', 'Tim']

    if (!req.query.user || !expected.includes(req.query.user)) {
        res.send('No tienes los privilegios para ingresar')
    }
    next()
}