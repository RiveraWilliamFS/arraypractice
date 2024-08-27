const router = require("express").Router();
const {
    createShoe,
    getAllShoe,
    getShoeById,
    updateShoe,
    deleteShoe
} = require("../controller/shoeController");

router.get("/", getAllShoe);

router.get("/:id", getShoeById);

router.post("/", createShoe);

router.put("/:id", updateShoe);

router.delete("/:id", deleteShoe);

module.exports = router;