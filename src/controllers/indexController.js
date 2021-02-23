const {logger} = require('../../config/winston');

exports.default = async function (req, res) {
    return res.send("hello world");
};