var express = require("express");
const {
  create,
  getEmployees,
  update,
  deletes,
  edit,
} = require("../controllers/employees");
var router = express.Router();

/* GET home page. */
router.get("/", getEmployees);

router.get("/employee/new", (req, res) => {
  res.render("new");
});
router.post("/employee/create", create);

router.get("/employee/update/:id", update);
router.post("/employee/update/:id", edit);

router.get("/employee/delete/:id", deletes);
module.exports = router;
