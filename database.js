const mongoose = require('mongoose');
const dotenv = require('dotenv')

dotenv.config();


class Database {
  constructor() {
    this.connect();
  } 
  connect(){
    mongoose.connect(process.env.MONGO_URL)
     .then(() => {
        console.log('database connected successfully ')
      })
      .catch((err) => { console.log('database connection err' + err)});
   }
}

module.exports = new Database();