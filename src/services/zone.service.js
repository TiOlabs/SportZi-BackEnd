const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getZone = async () => {
    return await prisma.zone.findMany();
};

const addZone = async (zone) => {
    return await prisma.zone.create({
        data: {
            ...zone,
        },
    });
};

const updateZone = async (id, zone) => {
    return await prisma.zone.update({
        where: {id: id},
        data: {
            ...zone,
        },
    });
};

const deleteZone = async (id) => {
    return await prisma.zone.delete({
        where: {id: id},
    });
};

module.exports = {
    getZone,
    addZone,
    updateZone,
    deleteZone,
};