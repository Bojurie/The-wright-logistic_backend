const express = require('express');
const EmailSender = require('../sendMail');

// router.use(bodyParser.json());
// router.use(bodyParser.urlencoded({extended: true}))
// router.use(cors())

const router = express.Router();



router.post('/', async (req, res) =>{
  try{
    const {fullName, email, phone, subject, message} = req.body
    EmailSender({fullName, email, phone, subject, message})
     res.json({msg: " Your message was sent successfully"});
  } catch (error){
    res.status(404).json({msg: "Error"})
  }
})

module.exports = router;