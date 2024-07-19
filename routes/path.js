const express = require("express");
const FrontController = require("../Controllers/FrontController");
const UserController = require("../Controllers/UserController");
const router = express.Router();

// FrontController routes
router.get("/", FrontController.home);
router.get("/course", FrontController.courses);
router.get("/contact", FrontController.contact);
router.get("/teacher", FrontController.teachers);
router.get("/sign", FrontController.signUp);

// UserController
router.post("/insert", UserController.insert);

module.exports = router;
