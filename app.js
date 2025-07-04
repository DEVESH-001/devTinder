const express = require("express");
const connectDB = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");

//adding middleware
app.use(express.json());
app.use(cookieParser());

//importing router
const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

//using the router, ("/") ->base url for all the routes
app.use("/", authRouter);
app.use("/", profileRouter);
app.use("/", requestRouter);


//calling the connectDB fn from db.js
connectDB()
  .then(() => {
    console.log("DB connected successfully");
    //after connecting to db, server will run (good approach)
    app.listen(4000, () => {
      console.log("Server is running");
    });
  })
  .catch((err) => {
    console.log(err, "Error connecting to DB ! ! !");
  });
