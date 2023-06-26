const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoos = require("mongoose");
const sessionStorage = require("connect-mongodb-session")(session);
const path = require("path");
const ip = require("request-ip");
const User = require("./model/user");
const PORT = "3000";
require("dotenv").config();
const MONGO_CONNECT = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}mymongoinit.6md0cxy.mongodb.net/${process.env.MONGO_DB_NAME}?retryWrites=true&w=majority`;
const app = express();
const store = new sessionStorage({
  uri: MONGO_CONNECT,
  collection: "session",
});
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
    store: store,
    cookie: {
      express: 3600000,
    },
  })
);

app.use(ip.mw());

const publicRoutes = require("./routes/public");

app.use((req, res, next) => {
  if (req.user) {
    next();
  }
  const userIp = req.clientIp;
  User.find({ ip: userIp })
    .then((user) => {
      if (user.length === 0) {
        let newUser = new User({
          ip: userIp,
          codes: [],
        });
        return newUser.save().then((result) => {
          User.find({ ip: userIp }).then((user) => {
            req.user = user;
            next();
          });
        });
      } else {
        req.user = user;
        next();
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

app.use(publicRoutes);

mongoos
  .connect(MONGO_CONNECT)
  .then((result) => {
    app.listen(process.env.PORT || PORT, () => {
      console.log(`listining to the ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
