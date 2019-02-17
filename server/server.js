const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, '..', 'client', 'public')));
app.use(bodyParser.json());

app.use("/", require("./routes"));

// db.sync().then( () => console.log("Tables created!"));
app.listen(8080, () => console.log("Listening on port 8080"));