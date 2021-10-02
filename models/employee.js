const mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
});

module.exports = mongoose.model("Employee", employeeSchema);
