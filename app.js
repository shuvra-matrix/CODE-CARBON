const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoos = require("mongoose");
const path = require("path");
const PORT = "3000";
require("dotenv").config();
const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      express: 3600000,
    },
  })
);

const publicRoutes = require("./routes/public");

app.use(publicRoutes);

app.listen(process.env.PORT || PORT, () => {
  console.log(`listining to the ${PORT}`);
});
