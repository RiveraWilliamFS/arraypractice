const express = require("express");
const router = express.Router();
const boardRoutes= require("./boardRoutes");
const shoeRoutes= require("./shoeRoutes");
const skaterRoutes= require("./skaterRoutes")

router.get("/", (req, res) => {
    res
    .status(200)
    .json({ success: true, message: `${req.method} - Request Made` });
});

router.use("/board", boardRoutes);
router.use("/shoe", shoeRoutes)
router.use("/skater", skaterRoutes)

module.exports = router;
