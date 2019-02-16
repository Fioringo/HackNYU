const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const { db } = require("./models");
const session = require('express-session');
// const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const passportJWT = require('passport-jwt');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

const app = express();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());

app.use(passport.initialize());

// app.use(session({
// 	key: 'user_sid',
// 	secret: 'password',
// 	resave: false,
// 	saveUninitialized: false,
// 	cookie: {
// 		expires: 600000
// 	}
// }));

// app.use((req, res, next) => {
// 	if(req.cookies.user_sid && !req.session.user) {
// 		res.clearCookie('user_sid');
// 	}
// 	next();
// });

// var sessionChecker = (req, res, next) => {
// 	if(req.session.user && req.cookies.user_sid) {
// 		res.redirect('/dashboard');
// 	} else {
// 		next();
// 	}
// };

app.use("/", require("./routes"));

db.sync().then( () => console.log("Tables created!"));
app.listen(8080, () => console.log("Listening on port 8080"));