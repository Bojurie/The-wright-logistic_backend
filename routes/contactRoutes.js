var express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}))
// router.use(cors())

const router = express.Router();

router.post('/', (req, res) =>{
    const data = req.body
       let setupTransport = nodemailer.createTransport({
       service: 'gmail',
       port: 465,
       auth: {
          user: 'thewrightlogistic@gmail.com', // generated ethereal user
          pass: process.env.EMAIL_SECRET_PASS // generated ethereal password
        },
      });

   
    const mailOptions = {
      from: data.email,
      to: 'thewrightlogistic@gmail.com',
      subject: `Message from ${data.subject}`,
      html: `
      <h3>Information</h3>
      <ul>
      <li>Full Name: ${data.fullName}</li>
      <li>Phone: ${data.phone}</li>
      <li>Email: ${data.email}</li>
      </ul>

      <h3>Message</h3>
      <p>${data.message}</p>
      `
    };

  setupTransport.sendEmail =(mailOptions, (err, res) =>{
      if(err){
        console.log(err)
        res.send(err)
      } else {
        res.send('Your message was sent successfully')
      }
    })  

  setupTransport.closed();
  
  
  });

module.exports = router;