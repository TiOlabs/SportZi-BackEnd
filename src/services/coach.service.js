const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");


// const getCoaches = async () => {
//   return await prisma.coach.findMany();
// };

// const addCoach = async (coach) => {
//   return await prisma.coach.create({
//     data: {
//       ...coach,
//     },
//   });
// };

// const updateCoach = async (id,coach) => {
//     return await prisma.coach.update({
//       where: { id: id },
//       data: {
//         ...coach,
//       },
//     });
//   };


//   const deleteCoach= async (id) => {
//     return await prisma.coach.delete({
//       where: { id: id },
//     });
//   }





//new services

const addCoach = async (coach) => {
  const hashedPassword = await bcrypt.hash(coach.password, 10); // Hash the password

  async function generateUserID() {
    const userCount = await prisma.coach.count(); // Get the count of existing users
    const paddedID = String(userCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `C${paddedID}`; 
  }

  const newCoachID = await generateUserID();

  const newUser =  await prisma.user.create({
    data: {
      // ...coach,
      user_id:newCoachID,
      firstname:coach.firstname,
      lastname:coach.lastname,
      email:coach.email,
      phone:coach.phone,
      DOB:coach.DOB,
      gender:coach.gender,
      role:"coach",
      password: hashedPassword,
    },
  });

  const newCoach = await prisma.coach.create({
    data:{
      sport:coach.sport,
      user: {
        connect: {
          user_id:newCoachID,
        },
      },

    }
  }) 
};



  module.exports = {
      // getCoaches,
      addCoach,
      // updateCoach,
      // deleteCoach
  }