const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcadeRatings = async () => {
    return await prisma.arcadeFeedbacks.findMany();
    }
const addArcadeRatings = async (arcadeFeedbacks) => {
    return await prisma.arcadeFeedbacks.create({
        data: {
            ...arcadeFeedbacks,
        },
    });
    }
const updateArcadeRatings = async (id, arcadeFeedbacks) => {
    return await prisma.arcadeFeedbackss.update({
        where: { id: id },
        data: {
            ...arcadeFeedbacks,
        },
    });
    }
const deleteArcadeRatings = async (id) => {
    return await prisma.arcadeFeedbacks.delete({
        where: { id: id },
    });
    }
module.exports = {
    getArcadeRatings,
    addArcadeRatings,
    updateArcadeRatings,
    deleteArcadeRatings,
};