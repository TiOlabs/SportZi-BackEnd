const { PrismaClient, Role } = require("@prisma/client");
const prisma = new PrismaClient();

const bcrypt = require("bcrypt");



const getArcadeManagers = async () => {
  return await prisma.arcadeManager.findMany({
    include: {
      user: true 
    }
  });
};

// const addArcadeManager = async (arcadeManager) => {
//   return await prisma.arcadeManager.create({
//     data: {
//       ...arcadeManager,
//     },
//   });
// };

// const updateArcadeManager = async (id,player) => {
//     return await prisma.arcadeManager.update({
//       where: { id: id },
//       data: {
//         ...arcadeManager,
//       },
//     });
//   };

  // const deleteArcadeManager = async (id) => {
  //   return await prisma.arcadeManager.delete({
  //     where: { id: id },
  //   });
  // }



  const deleteArcadeManager = async (managerId) => {
    try {
      // First, find the manager based on the provided managerId
      const manager = await prisma.arcadeManager.findUnique({
        where: {
          manager_id: managerId
        },
        include: {
          user: true, // Include the associated user
          arcade:true
        }
      });
  
      if (!manager) {
        throw new Error("Manager not found");
      }
  
      // Delete the manager
      await prisma.arcadeManager.delete({
        where: {
          manager_id: managerId
        }
      });
  
      // Delete the associated user
      await prisma.user.delete({
        where: {
          user_id: manager.user.user_id
        }
      });
  
      return manager;
    } catch (error) {
      throw new Error(error);
    }
  };

  


//new services

const addArcadeManager = async (req, res, arcadeManager) => {

  // Check if the email is already registered
  const existingUser = await prisma.user.findUnique({
    where: {
      email: arcadeManager.email,
    },
  });
  if (existingUser) {
    return res.status(400).json({ error: "Email is already registered" });
  }

  const hashedPassword = await bcrypt.hash(arcadeManager.password, 10); // Hash the password

  async function generateUserID() {
    const managerCount = await prisma.arcadeManager.count(); // Get the count of existing users
    const paddedID = String(managerCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `M${paddedID}`;
  }

  const newManagerID = await generateUserID();

  //generate new arcade id as `A00001`
  async function generateArcadeID() {
    const arcadeCount = await prisma.arcade.count(); // Get the count of existing users
    const paddedID = String(arcadeCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `A${paddedID}`;
  }

  const newArcadeID = await generateArcadeID();

  const newUser = await prisma.user.create({
    data: {
      user_id: newManagerID,
      firstname: arcadeManager.firstname,
      lastname: arcadeManager.lastname,
      email: arcadeManager.email,
      // DOB: arcadeManager.DOB,
      gender: arcadeManager.gender,
      role:Role.MANAGER,
      password: hashedPassword,
    },
  });

  const newManager = await prisma.arcadeManager.create({
    data: {
      user: {
        connect: {
          user_id: newManagerID,
        },
      },
    },
  });

  const newArcade = await prisma.arcade.create({
    data: {
      arcade_id: newArcadeID,
      arcade_name: arcadeManager.arcade_name,
      location: arcadeManager.location,
      arcade_email: arcadeManager.arcade_email,
      open_time:arcadeManager.open_time,
      close_time:arcadeManager.close_time,
      
      manager: {
        connect: {
          manager_id: newManagerID,
        },
      },
    },
  });

  res.status(201).json(newUser);
};

module.exports = {
  getArcadeManagers,
  addArcadeManager,
  // updateArcadeManager,
  deleteArcadeManager
};
