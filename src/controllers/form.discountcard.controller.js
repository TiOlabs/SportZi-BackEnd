const discountcardService = require("../services/form.discountcard.service");

const getDiscountCard = async (req, res) => {
    try {
        const discountCards = await discountcardService.getDiscountCards();
        res.status(200).json(discountCards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

const addDiscountCard = async (req, res) => {
    try {
        const discount = req.body;
        const newDiscount = await discountcardService.addDiscountCard(
            discount
        );
        res.status(201).json(newDiscount);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const updateDiscountCard = async (req, res) => {    

    try {
        const { id } = req.params;
        const number = parseInt(id);
        const discountCard = req.body;
        const updatedDiscountCard = await discountcardService.updateDiscountCard(
            number,discountCard
        );
        res.status(200).json(updatedDiscountCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const deleteDiscountCard = async (req, res) => {
    try {
        const { id } = req.params;
        const number = parseInt(id);
        await discountcardService.deleteDiscountCard(number);
        res.status(200).json({ message: "Discount Card deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

module.exports = {
    getDiscountCard,
    addDiscountCard,
    updateDiscountCard,
    deleteDiscountCard,
};

