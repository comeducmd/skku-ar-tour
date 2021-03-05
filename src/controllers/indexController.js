const {logger} = require('../../config/winston');

exports.default = async function (req, res) {
    const variable = 5;
    return res.render('index.ejs', { v: variable});
};