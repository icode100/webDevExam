const express =  require("express");
const app = express();
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(xss());

// error handler
app.use((err,req,res,next) => {
    console.log(err);
    res.status(500).send("Somthing Broke");
})

// main body












const port =  8000;
app.listen(port,()=>console.log(`welcome to PortGen.IO on port:${port}`))
