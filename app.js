// const express = require('express');
const express = require('express');
const parser = require('body-parser');
const passengerRoutes = require('./routes/passengerRoutes');
const path = require('path');
const {engine} = require('express-handlebars');
const cookieSession = require('cookie-session');
const authMiddleware =  require('./middlewares/authenticationMiddleware')
const bookingRoutes = require('./routes/bookingRoute');
const cabRoutes = require('./routes/cabRoutes')

const app = express();
app.engine('handlebars', engine());

app.set('view engine', 'handlebars');

app.use("/", parser.urlencoded({extended: true}));
app.use("/static", express.static(path.join(__dirname, 'static')));


//configuring cookie
app.use(cookieSession({
    name : 'session',
    httpOnly  : true,
    keys :["abcudfhbff"],
    maxAge :  24 * 60 * 60 * 1000 
}));

// app.use('/', (req, res, next)=>{
//     console.log(req.session);
//     next();
// })

app.use(authMiddleware)

app.use("/", passengerRoutes);
app.use("/", cabRoutes)

app.use('/', bookingRoutes);

app.listen(80)


