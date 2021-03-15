const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

//middlewars
app.use(cors());
app.use(bodyParser.json());


//importing routes
const userRoute = require('./routes/user');
const productRoute = require('./routes/product');


// using routes
app.use('/user', userRoute);
app.use('/product', productRoute);

app.get('/', (req, res) => {
    res.send("server is live");
});




// establishing db connection
mongoose.connect
(process.env.DB_CONNECTION, 
{ useNewUrlParser: true }, 
() => console.log('connect to db')
);
app.listen(3000);