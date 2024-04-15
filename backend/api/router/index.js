const router = require("express").Router();

const userRouter = require("./season.router")

router.use("/seasons", userRouter);

module.exports = router;