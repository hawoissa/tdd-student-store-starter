const express = require("express");
const morgan = require("morgan");
const router = require("./routes/store");
const {BadRequestError, NotFoundError} = require("./utils/errors");
const cors = require("cors");
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requeseted-With, Content-Type, Accept");
    next();
})

app.use(express.json());  
app.use(morgan("tiny"));
app.use("/store", router);

app.use(cors());


app.get("/",  (req, res, next) => {
    res.status(200).json({ping: "pong"})
})

app.use((req, res, next) => {
    return next(new NotFoundError());
 })
 
//  app.use((error, req, res, next) => {
//     const status = error.status || 500;
//     const message = error.message;
//     return res.status(status).json({
//        error: {message, status}
// });

module.exports = app;


// const express = require("express");
// const morgan = require("morgan");
// const router = require("./routes/store");

// const app = express();

// app.use(express.json());  
// app.use(morgan("tiny"));
// app.use("/route", router);

// app.get("/",  (req, res) => {
//    res.status(200).json({ping: "pong"})
// })

// app.use((req, res, next) => {
//    return next(new NotFoundError());
// })

// app.use((error, req, res, next)=> {
//    const status = error.status || 500;
//    const message = error.message;
//    return res.status(status).json({
//       error: {message, status}
//    });

// // })

// module.exports = app;
