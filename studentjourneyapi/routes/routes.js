const express = require("express")
const router = express.Router()

//local imports
const test = require("../controllers/test")
const register = require("../controllers/register")

router.get("/api/test", test)
router.post("/api/register", register)

module.exports = router