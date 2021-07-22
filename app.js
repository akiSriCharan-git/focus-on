require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors({origin: '*'}));
app.use(express.json());

mongoose.connect(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
})
.then(()=>{
  console.log('successfully connected to database')
})
.catch(err=>{
  console.log(err)
});

const routes = require('./api/');
app.use('/home', routes.home);
const schemas = require('./models/schemas');
port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log('Server started')
});
