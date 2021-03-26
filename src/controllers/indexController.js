const {logger} = require('../../config/winston');

exports.default = async function (req, res) {
    const variable = 5;
    logger.info('Default');
    return res.render('index.ejs', { v: variable});
};

exports.clear = async function (req, res) {
    logger.info('Clear');
    return res.render('clear.ejs');
};