const Joi = require('joi');
module.exports.shortenUrl = (req, res) => {
    const { error } = validateUrlForm(req.body);
    if (error) {
        console.log(error.details[0].message);
        res.status(400).send(error.details[0].message);
        return;
    }
    console.log(req.body.url);
    res.status(200).json("given url is valid");
}

function validateUrlForm(body) {
    const schema = Joi.object({
        url: Joi.string().pattern(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/).required()
    });
    return schema.validate(body);
};