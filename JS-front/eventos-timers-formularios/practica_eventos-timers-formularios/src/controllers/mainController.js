let mainControllers = {
    index: (req, res) => {
        res.render('index')
    },
    events: (req, res) => {
        res.render('events')
    },
    clock: (req, res) => {
        res.render('clock')
    }
}

module.exports = mainControllers