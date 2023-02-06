const nodemailer = require('nodemailer');

require('dotenv').config();


const Email = (options) =>{
  let transporter = nodemailer.createTransport({
       service: 'gmail',
       auth: {
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.PASSWORD // generated ethereal password
        },
      });

      transporter.sendMail(options, (err, data) =>{
         if(err){
            console.log(err)
            return;
          } 
        })  
      }
      const EmailSender = ({fullName, email, phone, subject, message}) =>{
       const options = {
        from: `${email}`,
        to: 'thewrightlogistic@gmail.com',
        subject: `Message from ${subject}`,
        html: `
        <h3>Information</h3>
        <ul>
        <li>Full Name: <b>${fullName}</b></li>
        <li>Phone:  <b>${phone}</b></li>
        <li>Email: <b>${email}</b> </li>
        </ul>

        <h3>Message</h3>
        <p><i>${message}</i></p>
        `
       } 
       Email(options)
    };

module.exports = EmailSender
