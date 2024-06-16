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

const getPlayerById = async (id) => {
  try {
    const player = await prisma.player.findUnique({
      where: {
        player_id: id,
      },
      include: {
        user: true,
      },
    });
    if (!player) {
      throw new Error("Player not found");
    }
    return player;
  }
  catch (error) {
    throw new Error(error);
  }
};

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
        user: true,
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




const deletePlayer = async (playerId) => {
  try {
    //for find rhe player
    const player = await prisma.player.findUnique({
      where: {
        player_id: playerId,
      },
      include: {
        user: {
          include:{
            phone : true,
          }
        },
      },
    });
    if (!player) {
      throw new Error("Player not found");
    }
    
     //For delete phoneNo
    const userPhones = await prisma.userPhone.findMany({
      where: {
        user_id: playerId,
      },
    });
    for (const phone of userPhones) {
      await prisma.userPhone.delete({
        where: {
          phone_number_user_id: {
            user_id: playerId,
            phone_number: phone.phone_number,
          },
        },
      });
    }

    // Delete the player
    await prisma.player.delete({
      where: {
        player_id: playerId,
      },
    });

    // Delete the associated user
    await prisma.user.delete({
      where: {
        user_id:playerId,
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
    return res.status(400).json({ message: "Email is already registered" });
  }

  const hashedPassword = await bcrypt.hash(player.password, 10); 

  async function generateUserID() {
    const userCount = await prisma.player.count(); 
    const paddedID = String(userCount + 1).padStart(5, "0"); 
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
  getPlayerById,
  addPlayer,
  updatePlayer,
  deletePlayer,
};
