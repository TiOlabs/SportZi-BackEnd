const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getSport = async () => {
  return await prisma.sport.findMany();
};
const getSportById = async (id) => {
  return await prisma.sport.findUnique({
    where: {
      sport_id: id,
    },
  });
};
const addSport = async (sport) => {
  console.log(sport);
  try {
    async function generateSportId() {
      const sports = await prisma.sport.count();
      const sportId = String(sports + 1).padStart(5, "0");
      return `S${sportId}`;
    }
    const existingSport = await prisma.sport.findUnique({
      where: {
        sport_name: sport.sport_name,
      },
    });
    console.log(sport);
    if (existingSport) {
      return res.status(400).json({ message: "Sport is already registered" });
    }
    const newSportID = await generateSportId();
    console.log(newSportID);
    console.log(sport.sport_name);
    const newSport = await prisma.sport.create({
      data: {
        sport_id: newSportID,
        sport_name: sport.sport_name,
      },
    });
    res.status(201).json(newSport);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
const updateSport = async (id, sport) => {
  return await prisma.sport.update({
    where: {
      sport_id: id,
    },
    data: sport,
  });
};
const deleteSport = async (id) => {
  return await prisma.sport.delete({
    where: {
      sport_id: id,
    },
  });
};
module.exports = {
  getSport,
  getSportById,
  addSport,
  updateSport,
  deleteSport,
};
