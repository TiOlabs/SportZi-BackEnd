const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getCoachCardInCoachPage = async () => {
    return await prisma.coachCard.findMany();
    }

const addCoachCardInCoachPage = async (coachCard) => {
    return await prisma.coachCard.create({
        data: {
            ...coachCard,
        },
    });
}

const updateCoachCardInCoachPage = async (id, coachCard) => {
    return await prisma.coachCard.update({
        where: { id: id },
        data: {
            ...coachCard,
        },
    });
}

const deleteCoachCardInCoachPage = async (id) => {
    return await prisma.coachCard.delete({
        where: { id: id },
    });
}

module.exports = {
    getCoachCardInCoachPage,
    addCoachCardInCoachPage,
    updateCoachCardInCoachPage,
    deleteCoachCardInCoachPage,
};