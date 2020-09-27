const Express = require('express');
const Exphbs = require('express-handlebars');
const BodyParser = require('body-parser');
const Handlebars = require('handlebars')
const Mongoose = require('mongoose');
const { default: ShortUniqueId } = require('short-unique-id');

require('dotenv').config();

// Specify ports
const PORT = process.env.PORT || 3000;

// Import database
const DataDB = require('./db/Data');

// Start app
const App = Express();

// Unique results code generator
const ResultCode = new ShortUniqueId();

App.engine('handlebars', Exphbs({
    defaultLayout: 'layout',
    layoutsDir: __dirname + '/views/layouts/',
}));

App.use(BodyParser.json());
App.use(BodyParser.urlencoded({ extended: false }));

App.set('view engine', 'handlebars');
App.use('/public', Express.static('public'));

// Connect Mongoose
Mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('MongoDB connected') });

// Routes
App.get('/', (req, res) => {
    res.render('index');
});

App.post('/submitquiz', (req, res) => {

});

App.get('/result/:code', (req, res) => {

});

App.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});