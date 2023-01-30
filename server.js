const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('./database')
const pino = require('express-pino-logger');
const middleware = require('./middleware')
require('dotenv').config()

const app = express();

const contactRouter = require('./routes/contactRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
const dashboardRouter = require('./routes/dashboard');


// view engine setup
const cors = require('cors')
app.set('view engine', 'ejs' );
app.use(express.static(path.join(__dirname, 'public')))



// STATIC FILES
// app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(cors())
// app.use(session({
//   secret: "Afroboy",
//   resave: true,
//   saveUninitialized: false
// }))


// post contact route
app.use('/auth',authRouter );
app.use('/users',userRouter );
app.use('/contact',contactRouter );
// app.use('/dashboard',dashboardRouter );


// FOR PRODUCTION
app.listen(process.env.PORT || 8080, () => {
   console.log(`Listening on port 8080`)
})

