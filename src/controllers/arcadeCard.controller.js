const arcadeCardService = require("../services/arcadeCard.service");

const getarcadeCard = async (req, res) => {
    try {
        const arcadeCard = await arcadeCardService.getarcadeCard();
        res.status(200).json(arcadeCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

const addarcadeCard = async (req, res) => {
    try {
        const discount = req.body;
        const newDiscount = await arcadeCardService.addarcadeCard(
            discount
        );
        res.status(201).json(newDiscount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const updatearcadeCard = async (req, res) => {    
           
    try {
        const { id } = req.params;
        const number = parseInt(id);
        const arcadeCard = req.body;
        const updatedarcadeCard = await arcadeCardService.updatearcadeCard(
            number,arcadeCard
        );
        res.status(200).json(updatedarcadeCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const deletearcadeCard = async (req, res) => {
    try {
        const { id } = req.params;
        const number = parseInt(id);
        await arcadeCardService.deletearcadeCard(number);
        res.status(200).json({ message: "Arcade Card deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

module.exports = {
    getarcadeCard,
    addarcadeCard,
    updatearcadeCard,
    deletearcadeCard,
};

