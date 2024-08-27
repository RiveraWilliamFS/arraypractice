const Shoe = require("../models/Shoe");

const getAllShoe = async (req, res) => {
    try {
        const shoe = await Shoe.find({});
        res.status(200).json({ 
            data: shoe,
            success: true, 
            message: `${req.method} - request to Shoe endpoint`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const getShoeById = async (req, res) => {
    const { id } = req.params;
    try { 
        const shoe = await Shoe.findById(id);
        if (!Shoe) {
            return res.status(404).json({ 
                success: false, 
                message: "Shoe not found",
            });
        }
        res.status(200).json({ 
            data: shoe,
            success: true, 
            message: `${req.method} - request to Shoe endpoint`,
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

const createShoe = async (req, res) => {
    const { shoe } = req.body;
    try { 
        const newShoe = await Shoe.create(shoe);
        res.status(201).json({ 
            data: newShoe,
            success: true, 
            message: `${req.method} - request to Shoe endpoint`,
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

const updateShoe = async (req, res) => {
    const { id } = req.params;
    try { 
        const shoe = await Shoe.findByIdAndUpdate(id, req.body, { new: true });
        if (!shoe) {
            return res.status(404).json({ 
                success: false, 
                message: "Shoe not found",
            });
        }
        res.status(200).json({ 
            data: shoe,
            success: true, 
            message: `${req.method} - request to Shoe endpoint`,
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

const deleteShoe = async (req, res) => {
    const { id } = req.params;
    try { 
        const shoe = await Shoe.findByIdAndDelete(id);
        if (!shoe) {
            return res.status(404).json({ 
                success: false, 
                message: "Shoe not found",
            });
        }
        res.status(200).json({ 
            data: shoe,
            success: true, 
            message: `${req.method} - request to Shoe endpoint`,
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
    createShoe,
    getAllShoe,
    getShoeById, 
    updateShoe, 
    deleteShoe
};
