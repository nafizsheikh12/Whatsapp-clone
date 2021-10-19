const express = require('express');
const app = express()
const port = 4000
const dotenv = require('dotenv')
const bodyParser = require('body-parser')


//use com
app.use(bodyParser.json({extended: true}))


//try
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration


dotenv.config()
//db 
require('./db/db')

//component
const Routes = require('./routes/Router')

require('./routes/Router')(app)

app.listen(port,() => {
    console.log(`start conn ${port}`)
})