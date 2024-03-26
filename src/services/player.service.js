const { PrismaClient, Role } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const getPlayers = async () => {
  return await prisma.player.findMany({
    include: {
      user: true,
    },
  });
};

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

const updatePlayer = async (req, res, playerId, player) => {
  try {
    const {
      firstname,
      lastname,
      email,
      password,
      DOB,
      gender,
      accountNumber,
      is_active,
      user_image,
    } = req.body;

    // First, find the player based on the provided playerId
    const existPlayer = await prisma.player.findUnique({
      where: {
        player_id: playerId,
      },
      include: {
        user: true, // Include the associated user
      },
    });

    if (!existPlayer) {
      throw new Error("Player not found");
    }

    // Delete the player
    await prisma.player.update({
      where: {
        player_id: playerId,
      },
      data: {},
    });

    // Delete the associated user
    const updatedUser = await prisma.user.update({
      where: {
        user_id: existPlayer.user.user_id,
      },
      data: {
        firstname,
        lastname,
        email,
        password,
        DOB,
        gender,
        accountNumber,
        is_active,
        user_image,
      },
    });

    return updatedUser;
  } catch (error) {
    throw error;
  }
};

// const deletePlayer = async (id) => {
//   return await prisma.player.delete({
//     where: {
//        player_id: id
//     },
//   });
// };

const deletePlayer = async (playerId) => {
  try {
    // First, find the player based on the provided playerId
    const player = await prisma.player.findUnique({
      where: {
        player_id: playerId,
      },
      include: {
        user: true, // Include the associated user
      },
    });

    if (!player) {
      throw new Error("Player not found");
    }

    //delete phoneNo
    await prisma.userPhone.delete({
      where: {
        user_id: player.user.user_id,
      },
    });

    // Delete the player
    await prisma.player.delete({
      where: {
        player_id: playerId,
      },
    });

    // Delete the associated user
    await prisma.user.delete({
      where: {
        user_id: player.user.user_id,
      },
    });

    return player;
  } catch (error) {
    throw new Error(error);
  }
};

//new services

const addPlayer = async (req, res, player) => {
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

  try {
    const newUser = await prisma.user.create({
      data: {
        // ...player,
        user_id: newPlayerID,
        firstname: player.firstname,
        lastname: player.lastname,
        email: player.email,
        DOB: player.DOB,
        gender: player.gender,
        role: player.role,
        password: hashedPassword,
        accountNumber: player.accountNumber,
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
    const newPhone = await prisma.userPhone.create({
      data: {
        phone_number: player.phone_number,

        user: {
          connect: {
            user_id: newPlayerID,
          },
        },
      },
    });
    return res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getPlayers,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
