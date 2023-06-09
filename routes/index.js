const { Router } = require("express")
const controllers = require("../controllers")
const router = Router()

router.get("/", (req, res) => res.send("This is root!!!"))

router.post("/registrations", controllers.postTailgateRegistration)
router.get("/registrations", controllers.getTailgateRegistrations)

module.exports = router