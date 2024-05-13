const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getSport = async () => {
    return await prisma.sport.findMany();
    }
const getSportById = async (id) => {
    return await prisma.sport.findUnique({
        where: {
            sport_id: id,
        },
    });
}
const addSport = async (sport) => {
    return await prisma.sport.create({
        data: sport,
    });
}
const updateSport = async (id, sport) => {
    return await prisma.sport.update({
        where: {
            sport_id: id,
        },
        data: sport,
    });
}
const deleteSport = async (id) => {
    return await prisma.sport.delete({
        where: {
            sport_id: id,
        },
    });
}
module.exports = {
    getSport,
    getSportById,
    addSport,
    updateSport,
    deleteSport,
};
