let indexControllers = {
    random: (req, res) => {
        res.render('random')
    },
    trending: (req, res) => {
        res.render('trending')
    }
}

module.exports = indexControllers