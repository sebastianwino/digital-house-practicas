const { check } = require('express-validator');

let moviesValidatios = [
    check('title').isLength({min: 1}).withMessage('Title cannot be empty!'),
    check('rating').isDecimal({min: 1, max: 10, decimal_digits: '1,'}).withMessage('Rating cannot be empty, must be a number between 1 and 10!'),
    check('awards').isInt({min: 0, max: 99}).withMessage('Awards must be a number between 1 and 10!'),
    check('release_date').isDate().withMessage('Release date must be a valid date!'),
    check('length').isInt({min: 1, max: 999}).withMessage('Length must be a number between 1 and 999!')
]

module.exports = moviesValidatios