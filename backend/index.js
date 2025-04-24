const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const {mongoose} = require('mongoose');
const app = express();
const cookieParser = require('cookie-parser')

//db connection
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('db connected'))
.catch((err) => console.log('db not connected', err))

//middleware
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))



app.use('/', require('./routes/authRoutes'))

const port = 8000;
app.listen(port, () => console.log(`server is running on port ${port}`)) 