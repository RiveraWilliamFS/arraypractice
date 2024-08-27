const router = require("express").Router();
const {
    createSkater,
    getAllSkater,
    getSkaterById,
    updateSkater,
    deleteSkater
} = require("../controller/skaterController");

router.get("/", getAllSkater);

router.get("/:id", getSkaterById);

router.post("/", createSkater);

router.put("/:id", updateSkater);

router.delete("/:id", deleteSkater);

module.exports = router;