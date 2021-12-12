const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("passport-local").Strategy;
const express = require("express");
// const { loginAction } = require("./node/actions/loginAction");
const { addProduct } = require("./node/actions/addProduct"); 
const { getProducts } = require("./node/actions/getProducts");
const { markSoldProduct } = require("./node/actions/markSoldProduct");
const { updateProduct } = require("./node/actions/updateProduct");

mongoose.connect("mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/school-project-backend", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

//   app.use(
//     session({
//       secret: "secretcode",
//       resave: true,
//       saveUninitialized: true,
//       store: MongoStore.create({
//         mongoUrl: "mongodb+srv://praktyki:praktyki2021@development.wtktz.mongodb.net/",
//       }),
//       ...(process.env.COOKIE_DOMAIN
//         ? { cookie: { domain: process.env.COOKIE_DOMAIN, httpOnly: false, sameSite: "None", secure: true } }
//         : {}),
//     })
//   );

// app.use(passport.initialize());
// app.use(passport.session());
// require("./node/passport-config")(passport);

// <-------------------------------- || -------------------------->

// ACTIONS

// app.post("/users/login", loginAction);

app.post("/product", addProduct);
app.get("/product", getProducts);
app.patch("/product/:id/sold", markSoldProduct);
app.put("/product/:id", updateProduct);

// <-------------------------------- || -------------------------->

app.listen(4000, () => {
  console.log("Server has started");
});
