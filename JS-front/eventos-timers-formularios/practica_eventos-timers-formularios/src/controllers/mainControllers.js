let mainControllers = {
    index: (req, res) => {
        res.render('index')
    },
    events: (req, res) => {
        res.render('events')
    }
}

module.exports = mainControllers