const router = require("express").Router();
const {
    createBoard,
    getAllBoard,
    getBoardById,
    updateBoard,
    deleteBoard
} = require("../controller/boardController");

router.get("/", getAllBoard);

router.get("/:id", getBoardById);

router.post("/", createBoard);

router.put("/:id", updateBoard);

router.delete("/:id", deleteBoard);

module.exports = router;