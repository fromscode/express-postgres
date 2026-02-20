const express = require("express");
const router = express.Router();

const controller = require("../controller/mainController");

router.get("/", controller.getHome);

router.get("/new", controller.getNew);

router.post("/new", controller.postNew);

module.exports = router;
