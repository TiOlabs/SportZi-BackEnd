const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


const getUser = async () => {
    return await prisma.user.findMany();
};

const getUserById = async (id) => {
    return await prisma.user.findUnique({
        where: {
            user_id: id,
        },
        include:{
            phone:true,
        }
 
    });
};


const addUser = async (user) => {
    return await prisma.user.create({
        data: {
            ...user,
        },
    });
};

const updateUser = async (id, user) => {
    return await prisma.user.update({
        where: { id: id },
        data: {
            ...user,
        },
    });
};

const deleteUser = async (id) => {
    return await prisma.user.delete({
        where: { id: id },
    });
};

module.exports = {
    getUser,
    getUserById,
    addUser,
    updateUser,
    deleteUser,
};

