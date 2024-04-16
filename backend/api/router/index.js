const router = require("express").Router();

const authRouter = require("./auth.router")
const seasonRouter = require("./season.router")
const userRouter = require("./user.router")

router.use("/auth", authRouter)
router.use("/seasons", seasonRouter)
router.use("/user", userRouter)

module.exports = router;