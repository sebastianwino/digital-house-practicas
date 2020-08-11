let userControllers = {
    register: (req, res) => {
        res.render('register')
    },
    create: (req, res) => {
        res.send('Registrado!!!')
    }
}

module.exports = userControllers