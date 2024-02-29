const arcadeRatingsService = require("../services/arcadeRatings.service");

const getArcadeRatings = async (req, res) => {
    try {
        const arcadeRatings = await arcadeRatingsService.getArcadeRatings();
        res.status(200).json(arcadeRatings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
const addArcadeRatings = async (req, res) => {
    try {
        const rating = req.body;
        const newRating = await arcadeRatingsService.addArcadeRatings(
            rating
        );
        res.status(201).json(newRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
const updateArcadeRatings = async (req, res) => {
    try {
        const { id } = req.params;
        const number = parseInt(id);
        const rating = req.body;
        const updatedRating = await arcadeRatingsService.updateArcadeRatings(
            number,rating
        );
        res.status(200).json(updatedRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
const deleteArcadeRatings = async (req, res) => {
    try {
        const { id } = req.params;
        const number = parseInt(id);
        await arcadeRatingsService.deleteArcadeRatings(number);
        res.status(200).json({ message: "Arcade Rating deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }
module.exports = {
    getArcadeRatings,
    addArcadeRatings,
    updateArcadeRatings,
    deleteArcadeRatings,
};