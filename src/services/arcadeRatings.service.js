const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcadeRatings = async () => {
    return await prisma.arcadeRatings.findMany();
    }
const addArcadeRatings = async (arcadeRatings) => {
    return await prisma.arcadeRatings.create({
        data: {
            ...arcadeRatings,
        },
    });
    }
const updateArcadeRatings = async (id, arcadeRatings) => {
    return await prisma.arcadeRatings.update({
        where: { id: id },
        data: {
            ...arcadeRatings,
        },
    });
    }
const deleteArcadeRatings = async (id) => {
    return await prisma.arcadeRatings.delete({
        where: { id: id },
    });
    }
module.exports = {
    getArcadeRatings,
    addArcadeRatings,
    updateArcadeRatings,
    deleteArcadeRatings,
};