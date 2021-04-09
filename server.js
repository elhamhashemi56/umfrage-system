require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");

//noch installieren////////////////////////////////////////////////////////////////////
// const cookieParser = require("cookie-parser");
// const csurf=require('csurf')
// const multer = require('multer')



//Routes noch anlegen ////////////////////////////////////////////////////////////////
 const userRouter = require("./routes/user_rout");
 const umfrageRouter = require("./routes/umfrage_rout");
 const frageRouter = require("./routes/frage_rout");


//initialize express
const app = express();
app.use(express.static(path.join(__dirname, "../build")));


//DB connection
const verbindeDB = require("./mongo-db");
verbindeDB();


app.use(logger("dev"));
//Body Parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//CORS Header Info
const corsHeader = require("./middleware/cors");
app.use(corsHeader);

//Routes
app.use("/user", userRouter);
app.use("/umfrage", umfrageRouter);
app.use("/frage", frageRouter);


//Error Middleware needs to be last
//dead End

app.get('*',(req,res,next)=>{
    let fehler=new Error('Diesen Pfad gibt es nicht')
    fehler.statusCode=404
    next(fehler)
})
// usere Fehler middle ware:
app.use((error, req,res,next) => {
    console.log('Unser FehlerMiddleware', error);
    // status im header setzen:
    res.status(error.statusCode)
    res.send({
      error: {
        status: error.statusCode,
        mitteilung: error.message
      }
    })
  })


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
//mit send or end req/res cycle ends!
module.exports = app;