const Joi = require('joi');
const databaseController = require('./databaseController');
module.exports.indexPage = (req, res) => {
    res.render('index');
};

module.exports.redirectShortenUrl = (req, res) => {
    const { error } = validateShortenUrl(req.params);
    if (error) {
        console.log(error.details[0].message);
        res.status(400).send(error.details[0].message);
        return;
    }
    databaseController.redirecthandler(req, res);
};

function validateShortenUrl(body) {
    const schema = Joi.object({
        code: Joi.string().alphanum().required().max(10)
    });
    return schema.validate(body);
};