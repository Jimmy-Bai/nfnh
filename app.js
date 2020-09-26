const Express = require('express');
const Exphbs = require('express-handlebars');
const BodyParser = require('body-parser');
const Handlebars = require('handlebars')
const Mongoose = require('mongoose');

require('dotenv').config();

// Specify ports
const PORT = process.env.PORT || 3000;

// Start app
const App = Express();

App.engine('handlebars', Exphbs({
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
}));

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: false }));

App.set('view engine', 'handlebars');
App.use('/public', Express.static('public'));

// Routes
App.get('/', (req, res) => {
    res.render('index');
});

App.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});