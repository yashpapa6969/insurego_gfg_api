const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})

function ConnectToDb() {
  // const url =
  //   `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWD}@cluster0.moagm73.mongodb.net/deptproject?retryWrites=true&w=majority`;
  const url = process.env.MONGODB_URI
  mongoose.set("strictQuery", true);
  mongoose
    .connect(url)
    .then(() => {
      console.log("Connected to the database ");
    })
    .catch((err) => {
      console.error(`Error connecting to the database. n${err}`);
    });
  
}


module.exports = ConnectToDb;