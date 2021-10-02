const Employee = require("../models/employee");

exports.getEmployees = (req, res, next) => {
  Employee.find({})
    .then((employees) => {
      res.render("index", { employess: employees });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.create = (req, res, next) => {
  const { firstname, lastname, email } = req.body;
  let newEmp = {
    firstname,
    lastname,
    email,
  };
  Employee.create(newEmp)
    .then((newEmp) => {
      console.log("create success: ", newEmp);
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.update = (req, res, render) => {
  const id = req.params.id;
  Employee.findById(id)
    .then((employee) => {
      res.render("edit", { employee: employee });
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.edit = (req, res, render) => {
  const id = req.params.id;
  const { firstname, lastname, email } = req.body;
  Employee.updateOne(
    { id },
    {
      $set: {
        firstname,
        lastname,
        email,
      },
    }
  )
    .then((employee) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.deletes = (req, res, next) => {
  const id = req.params.id;
  Employee.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};
