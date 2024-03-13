const coachCardInCoachPageService = require('../services/coachCardInCoachPage.service');

const getCoachCardInCoachPage = async (req, res) => {
    try {
        const coachCardInCoachPage = await coachCardInCoachPageService.getCoachCardInCoachPage();
        res.status(200).json(coachCardInCoachPage);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    };

const addCoachCardInCoachPage = async (req, res) => {
    try {
        const coachCard = req.body;
        const newCoachCard = await coachCardInCoachPageService.addCoachCardInCoachPage(
            coachCard
        );
        res.status(201).json(newCoachCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const updateCoachCardInCoachPage = async (req, res) => {

    try {
        const { id } = req.params;
        const number = parseInt(id);
        const coachCard = req.body;
        const updatedCoachCard = await coachCardInCoachPageService.updateCoachCardInCoachPage(
            number,coachCard
        );
        res.status(200).json(updatedCoachCard);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

const deleteCoachCardInCoachPage = async (req, res) => {

    try {
        const { id } = req.params;
        const number = parseInt(id);
        await coachCardInCoachPageService.deleteCoachCardInCoachPage(number);
        res.status(200).json({ message: "Coach Card deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    }

module.exports = {
    getCoachCardInCoachPage,
    addCoachCardInCoachPage,
    updateCoachCardInCoachPage,
    deleteCoachCardInCoachPage,
};