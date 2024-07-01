const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getArcade = async () => {
  return await prisma.arcade.findMany({
    include: {
      arcadefeedbacks: true,
      manager: {
        include: {
          user: true,
        },
      },
    },
  });
};

const getArcadeById = async (id) => {
  try {
    return await prisma.arcadeManager.findUnique({
      where: {
        manager_id: id,
      },
      include: {
        arcade: true,
        user: true,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const getArcadeByArcadeId = async (id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: id,
      },
      include: {
        manager: {
          include: {
            user: true,
          },
        },
        zone: {
          include: {
            sport: true,
            zoneBookingDetails: {
              include: {
                zone: true,
              },
            },
          },
        },
        arcadephoto: true,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const getArcadeByArcadeIdForCoachBooking = async (id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: id,
      },
      include: {
        zone: true,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const addArcadePhoto = async (arcade_id, image) => {
  if (!arcade_id) {
    throw new Error("arcade_id is required");
  }
  // Optionally, add more validation for arcade_id here (e.g., check format or existence in the database)

  try {
    return await prisma.arcadephoto.create({
      data: {
        arcade_id,
        image,
      },
    });
  } catch (error) {
    // Handle or log the error appropriately
    throw error;
  }
};

const deleteArcadePhoto = async (arcade_id, image) => {
  try {
    return await prisma.arcadephoto.delete({
      where: {
        arcade_id: arcade_id,
        image: image,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const addArcade = async (arcade) => {
  const existingArcade = await prisma.arcade.findFirst({
    where: {
      arcade_email: arcade.arcade_email,
    },
  });
  if (existingArcade) {
    throw new Error("Arcade already exists");
  }

  async function generateArcadeID() {
    const arcadeCount = await prisma.arcade.count(); // Get the count of existing users
    const paddedID = String(arcadeCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `A${paddedID}`;
  }
  const newArcadeID = await generateArcadeID();
  console.log("newArcadeID", newArcadeID);
  try {
    return await prisma.arcade.create({
      data: {
        arcade_id: newArcadeID,
        arcade_name: arcade.arcade_name,
        address: arcade.address,
        arcade_email: arcade.arcade_email,
        manager_id: arcade.manager_id,
        open_time: arcade.open_time,
        close_time: arcade.close_time,
        // distription: arcade.distription,
        // arcade_image: arcade.arcade_image,
        // location: arcade.location,
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const updateArcade = async (id, arcade) => {
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
};

module.exports = {
  getArcade,
  getArcadeById,
  getArcadeByArcadeId,
  getArcadeByArcadeIdForCoachBooking,
  addArcadePhoto,
  deleteArcadePhoto,
  addArcade,
  updateArcade,
  deleteArcade,
};
