var express = require("express");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
const keys = require("./config/keys");

var employees = require("./routes/employees");

mongoose.connect(keys.mongoURI, () => console.log("connected db"));

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", employees);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server on ${PORT}`));
