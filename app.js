// const express = require('express');
const express = require('express');
const parser = require('body-parser');
const passengerRoutes = require('./routes/passengerRoutes');
const path = require('path');
const {engine} = require('express-handlebars');
const cookieSession = require('cookie-session')


const app = express();
app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));

//configuring cookie session

app.use(cookieSession({
    name :'session',
    httpOnly : true,
    keys : ["abcttyu"],
    maxAge : 24 * 60 * 60 * 1000 
}))
app.use(passengerRoutes);

app.listen(80)


