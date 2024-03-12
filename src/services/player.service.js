const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

// const getPlayers = async () => {
//   return await prisma.player.findMany();
// };

// const addPlayer = async (player) => {
//   const hashedPassword = await bcrypt.hash(player.password, 10); // Hash the password

//   return await prisma.player.create({
//     data: {
//       ...player,
//       password: hashedPassword,
//     },
//   });
// };

// const updatePlayer = async (id, player) => {
//   return await prisma.player.update({
//     where: { id: id },
//     data: {
//       ...player,
//     },
//   });
// };

// const deletePlayer = async (id) => {
//   return await prisma.player.delete({
//     where: { id: id },
//   });
// };

//new services

const addPlayer = async (player) => {


  
  // Check if the email is already registered
  const existingUser = await prisma.user.findUnique({
    where: {
      email: player.email,
    },
  });
  if (existingUser) {
    return res.status(400).json({ error: "Email is already registered" });
  }

  const hashedPassword = await bcrypt.hash(player.password, 10); // Hash the password

  async function generateUserID() {
    const userCount = await prisma.player.count(); // Get the count of existing users
    const paddedID = String(userCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `P${paddedID}`;
  }

  const newPlayerID = await generateUserID();

  const newUser = await prisma.user.create({
    data: {
      ...player,
      user_id: newPlayerID,
      role: "player",
      password: hashedPassword,
    },
  });

  const newplayer = await prisma.player.create({
    data: {
      user: {
        connect: {
          user_id: newPlayerID,
        },
      },
    },
  });
};

module.exports = {
  // getPlayers,
  addPlayer,
  // updatePlayer,
  // deletePlayer,
};
