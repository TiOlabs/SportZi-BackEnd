const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getCoachCards = async () => {
    return await prisma.coachAssignDetails.findMany();
};

const addCoachCard = async (coachAssignDetails) => {
    return await prisma.coachAssignDetails.create({
        data: {
            ...coachAssignDetails,
        },
    });
};

const updateCoachCard = async (id, coach) => {
    return await prisma.coachCard.update({
        where: {id: id},
        data: {
            ...coachassigndetails,
        },
    });
};

const deleteCoachCard = async (id) => {
    return await prisma.coachCard.delete({
        where: {id: id},
    });
};

module.exports = {
    getCoachCards,
    addCoachCard,
    updateCoachCard,
    deleteCoachCard,
};