const express = require('express');
const compression = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
var cors = require('cors');
module.exports = function () {
    const app = express();
    app.use(compression());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride());
    app.use(cors());
    app.use(express.static(process.cwd() + '/public'));

    // routes
    require('../src/routes/indexRoute')(app);

    return app;
};