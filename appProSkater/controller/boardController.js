const Board = require("../models/Board");

const getAllBoard = async (req, res) => {
    try {
        const board = await Board.find({});
        res.status(200).json({ 
            data: board,
            success: true, 
            message: `${req.method} - request to Board endpoint`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const getBoardById = async (req, res) => {
    const { id } = req.params;
    try { 
        const board = await Board.findById(id);
        if (!board) {
            return res.status(404).json({ 
                success: false, 
                message: "Board not found",
            });
        }
        res.status(200).json({ 
            data: board,
            success: true, 
            message: `${req.method} - request to Board endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

const createBoard = async (req, res) => {
    const { board } = req.body;
    try { 
        const newBoard = await Board.create(board);
        res.status(201).json({ 
            data: newBoard,
            success: true, 
            message: `${req.method} - request to Board endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

const updateBoard = async (req, res) => {
    const { id } = req.params;
    try { 
        const board = await Board.findByIdAndUpdate(id, req.body, { new: true });
        if (!board) {
            return res.status(404).json({ 
                success: false, 
                message: "Board not found",
            });
        }
        res.status(200).json({ 
            data: board,
            success: true, 
            message: `${req.method} - request to Board endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

const deleteBoard = async (req, res) => {
    const { id } = req.params;
    try { 
        const board = await Board.findByIdAndDelete(id);
        if (!board) {
            return res.status(404).json({ 
                success: false, 
                message: "Board not found",
            });
        }
        res.status(200).json({ 
            data: board,
            success: true, 
            message: `${req.method} - request to Board endpoint`,
        });
    } catch (error) {
        console.error(error);
        if (error.name === "ValidationError") {
            res.status(422).json(error); 
        } else {
            res.status(500).json(error);
        }
    }
};

module.exports = { 
    createBoard,
    getAllBoard,
    getBoardById, 
    updateBoard, 
    deleteBoard
};
