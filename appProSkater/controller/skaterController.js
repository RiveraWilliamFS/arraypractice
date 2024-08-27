const skater = require("../models/Skater");

const getAllSkater = async (req, res) => {
    try {
        const skater = await Skater.find({});
        res.status(200).json({ 
            data: skater,
            success: true, 
            message: `${req.method} - request to skater endpoint`,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json(error);
    }
};

const getSkaterById = async (req, res) => {
    const { id } = req.params;
    try { 
        const skater = await Skater.findById(id);
        if (!skater) {
            return res.status(404).json({ 
                success: false, 
                message: "skater not found",
            });
        }
        res.status(200).json({ 
            data: skater,
            success: true, 
            message: `${req.method} - request to skater endpoint`,
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

const createSkater = async (req, res) => {
    const { skater } = req.body;
    try { 
        const newSkater = await Skater.create(skater);
        res.status(201).json({ 
            data: newSkater,
            success: true, 
            message: `${req.method} - request to skater endpoint`,
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

const updateSkater = async (req, res) => {
    const { id } = req.params;
    try { 
        const skater = await Skater.findByIdAndUpdate(id, req.body, { new: true });
        if (!skater) {
            return res.status(404).json({ 
                success: false, 
                message: "skater not found",
            });
        }
        res.status(200).json({ 
            data: skater,
            success: true, 
            message: `${req.method} - request to skater endpoint`,
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

const deleteSkater = async (req, res) => {
    const { id } = req.params;
    try { 
        const skater = await Skater.findByIdAndDelete(id);
        if (!skater) {
            return res.status(404).json({ 
                success: false, 
                message: "skater not found",
            });
        }
        res.status(200).json({ 
            data: skater,
            success: true, 
            message: `${req.method} - request to skater endpoint`,
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
    createSkater,
    getAllSkater,
    getSkaterById, 
    updateSkater, 
    deleteSkater
};
