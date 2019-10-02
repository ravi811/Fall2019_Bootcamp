//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
  db: {
    uri: 'mongodb+srv://ravi811:fireeye1@mymongodb-j9qgl.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
  }, 
  openCage: {
    key: '136f8c792d2941c5b2bbdbdda721dc3c' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
  },
  port: 8080
};