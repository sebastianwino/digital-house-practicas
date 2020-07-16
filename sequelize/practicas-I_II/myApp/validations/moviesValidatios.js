const { body, validationResult, check } = require('express-validator');

let moviesValidatios = [
    check('title').isLength().withMessage('This field cannot be empty!'),
    check('rating').isInt({min: 1, max: 10}).withMessage('This field cannot be empty, must be a number between 1 and 10!'),
    check('awards').isInt({min: 0, max: 99}).withMessage('This field must be a number between 1 and 10!'),
    check('release_date').isDate().withMessage('This field must be a date!'),
    check('length').isInt({min: 1, max: 999}).withMessage('This field cannot be empty, must be a number between 1 and 999!'),
    check('genre_id').isInt().withMessage('Must select an option!'),
]

module.exports = moviesValidatios