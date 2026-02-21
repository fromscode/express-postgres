const express = require("express");
const router = express.Router();

const controller = require("../controller/mainController");

router.get("/", controller.getHome);

router.get("/new", controller.getNew);

router.post("/new", controller.postNew);

router.get('/search{*splat}', controller.getSearch)

router.post('/delete', controller.deleteAllUsers)

module.exports = router;
