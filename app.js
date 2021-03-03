const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const getData = require('./controller/getdata');
const postData = require('./controller/postdata');
const updateData = require('./controller/update');
const deleteData = require('./controller/deletedata');

// .env config
const dotenv = require('dotenv');
dotenv.config();

//  port
PORT = process.env.PORT || 4000;

mongoose.connect(
  process.env.MONGODB_URL,
  {useNewUrlParser: true, useFindAndModify: true, useUnifiedTopology: true},
  (err) => {
    if (err) {
      console.log(`data base is not connected ${err}`);
    } else {
      console.log(`data base is conneceted `);
    }
  }
);

app.use(express.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use('/', getData);
app.use('/post', postData);
app.use('/update', updateData);
app.use('/delete', deleteData);

app.listen(PORT, (err) => {
  if (err) {
    console.log(`there wase a error ${err}`);
  } else {
    console.log(`server is running on port no ${PORT}`);
  }
});
