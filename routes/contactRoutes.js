var express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var urlencodedParser = bodyParser.urlencoded({ extended: false })

var router = express.Router();

router.post('/', urlencodedParser, function(req, res){
 console.log(req.body)
 res.render('contact', {qs: req.query});

   let transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: 'bojurier@gmail.com', // generated ethereal user
       pass: process.env.EMAIL_SECRET_PASS // generated ethereal password
     },
     
 });
 const mailOption = {
   name: req.body.name,
   phone: req.body.phone,
   subject: req.body.subject,
   from: req.body.email,
   to: 'thewrightlogistic@gmail.com',
   text: req.body.message

 }
 transporter.sendMail(mailOption, (error, info) =>{
   if(error){
     console.log(error)
     res.send('error')
   } else {
     console.log('Email sent: ' + info.response)
     res.send('Success')
   }
 })
});

router.get('/contact', (req, res) =>{
  res.render('contact', {tite: 'Contact', paragraph: 'Thank You For your Message'})
})

module.exports = router;