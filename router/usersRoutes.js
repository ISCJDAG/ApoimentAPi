const express = require("express");

const router = express.Router();

const { loginOwnerOrEmployee } = require("../controller/loginController");
const {createUser} = require("../controller/users/userController");

router.post("/users", loginOwnerOrEmployee);
router.get("/loginOwnerOrEmployee", createUser);
// router.get("/users/:id", getOneUserById);
// router.get("/users/name/:name", getAllUsersByName);
// router.put("/users/:id", updateOneUser);
// router.delete("/users/:id", deleteOneUser);

module.exports = router;