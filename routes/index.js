const express = require("express")
const router = express.Router()
const indexController = require("../controllers/indexController")

router.get("/html", indexController.getHtml)

router.get("/json", indexController.getJson)

router.get("/text", indexController.getText)

module.exports = router