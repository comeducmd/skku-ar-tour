const {logger} = require('../../config/winston');

exports.default = async function (req, res) {
    const variable = 5;
    return res.render('index.ejs', { v: variable});
};

exports.clear = async function (req, res) {
    return res.render('clear.ejs');
};