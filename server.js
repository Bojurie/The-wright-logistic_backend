const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const mongoose = require('./database')
const middleware = require('./middleware')
const cors = require('cors')


const app = express();

const contactRouter = require('./routes/contactRoutes');
const authRouter = require('./routes/authRoutes');
const userRouter = require('./routes/userRoutes');
// const dashboardRouter = require('./routes/dashboard');


// view engine setup
app.set('view engine', 'ejs' );

// STATIC FILES
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())


// post contact route
app.use('/auth',authRouter );
app.use('/users',userRouter );
app.use('/contact',contactRouter );
// app.use('/dashboard',dashboardRouter );


// FOR PRODUCTION
app.listen(process.env.PORT || 8080, () => {
   console.log(`Listening on port 8080`)
})

