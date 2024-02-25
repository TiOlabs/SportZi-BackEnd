const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// const getArcadeManagers = async () => {
//   return await prisma.arcadeManager.findMany();
// };

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

//   const deleteArcadeManager = async (id) => {
//     return await prisma.arcadeManager.delete({
//       where: { id: id },
//     });
//   }

const bcrypt = require("bcrypt");

//new services

const addArcadeManager = async (arcadeManager) => {
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
      phone: arcadeManager.phone,
      DOB: arcadeManager.DOB,
      gender: arcadeManager.gender,
      role: "manager",
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
  
      manager: {
        connect: {
          manager_id: newManagerID,
        },
      },
      
    }
  });
};


module.exports = {
  // getArcadeManagers,
  addArcadeManager,
  // updateArcadeManager,
  // deleteArcadeManager
};
