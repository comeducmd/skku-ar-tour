module.exports = function(app){
    const index = require('../controllers/indexController');
    app.get('/', index.default);
};