const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcade = async ()=>{
    return await prisma.arcade.findMany();
};

const addArcade = async (arcade)=>{
    return await prisma.arcade.create({
        data:{
            ...arcade,
        }
    });
};

const updateArcade = async (id,arcade) => {
    return await prisma.arcade.update({
      where: { id: id },
      data: {
        ...arcade,
      },
    });
};

const deleteArcade = async (id) => {
    return await prisma.arcade.delete({
      where: { id: id },
    });
 }

 module.exports = {
    getArcade,
    addArcade,
    updateArcade,
    deleteArcade,
  };