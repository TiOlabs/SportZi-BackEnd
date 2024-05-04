const { PrismaClient, Role } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const getCoaches = async () => {
  return await prisma.coach.findMany({
    include: {
      user: true,
      sport: true,
      coachFeedbacks: true,
    },
  });
};

const getCoachById = async (coachId) => {
  return await prisma.coach.findUnique({
    where: {
      coach_id: coachId,
    },
    include: {
      user: true,
      sport: true,
    },
  });
};


const getCoachAvailiability = async (coachId) => {
  try {
    const coach = await prisma.availiability.findMany({});

    if (!coach) {
      throw new Error("Coach not found");
    }

    return coach;
  } catch (error) {
    throw new Error(error);
  }
};

const getCoachById = async (coachId) => {
  return await prisma.coach.findUnique({
    where: {
      coach_id: coachId,
    },
    include: {
      user: true,
      sport: true,
    },
  });
}
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

const deleteCoach = async (coachId) => {
  try {
    // First, find the coach based on the provided coachId
    const coach = await prisma.coach.findUnique({
      where: {
        coach_id: coachId,
      },
      include: {
        user: {
          include: {
            phone: true,
          },
        }, // Include the associated user
      },
    });

    if (!coach) {
      throw new Error("Coach not found");
    }

    // For delete phonenumbers
    const userPhones = await prisma.userPhone.findMany({
      where: {
        user_id: coachId,
      },
    });
    for (const phone of userPhones) {
      await prisma.userPhone.delete({
        where: {
          phone_number_user_id: {
            user_id: coachId,
            phone_number: phone.phone_number,
          },
        },
      });
    }

    // Delete the coach
    await prisma.coach.delete({
      where: {
        coach_id: coachId,
      },
    });

    // Delete the associated user
    await prisma.user.delete({
      where: {
        user_id: coachId,
      },
    });
    return coach;
  } catch (error) {
    throw new Error(error);
  }
};

const addCoach = async (req, res, coach) => {
  try {

  async function generateUserID() {
    const userCount = await prisma.coach.count(); // Get the count of existing users
    const paddedID = String(userCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `C${paddedID}`;
  }

  async function generateSportID() {
    const sportCount = await prisma.sport.count(); // Get the count of existing users
    const paddedID = String(sportCount + 1).padStart(4, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `C${paddedID}`;
  }

  // Check if the email is already registered
  const existingUser = await prisma.user.findUnique({
    where: {
      email: coach.email,
    },
  });
  if (existingUser) {
    return res.status(400).json({ message: "Email is already registered" });
  }


  const hashedPassword = await bcrypt.hash(coach.password, 10); // Hash the password

  const newCoachID = await generateUserID();


    async function generateSportID() {
      const sportCount = await prisma.sport.count(); // Get the count of existing users
      const paddedID = String(sportCount + 1).padStart(4, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
      return `C${paddedID}`;
    }

    // Check if the email is already registered
    const existingUser = await prisma.user.findUnique({
      where: {
        email: coach.email,
      },
    });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(coach.password, 10); // Hash the password

    const newCoachID = await generateUserID();

    const newUser = await prisma.user.create({
      data: {
        // ...coach,
        user_id: newCoachID,
        firstname: coach.firstname,
        lastname: coach.lastname,
        email: coach.email,
        DOB: coach.DOB,
        gender: coach.gender,
        role: Role.COACH,
        password: hashedPassword,
      },
    });

    const existingSport = await prisma.sport.findFirst({
      where: {
        sport_name: coach.sport_name,
      },
    });

    let sportID;
    if (!existingSport) {
      sportID = await generateSportID();

      //add sport table tuple
      const newSport = await prisma.sport.create({
        data: {
          sport_id: sportID,
          sport_name: coach.sport_name,
        },
      });
    } else {
      sportID = existingSport.sport_id;
    }

    const newCoach = await prisma.coach.create({
      data: {
        user: {
          connect: {
            user_id: newCoachID,
          },
        },
        sport: {
          connect: {
            sport_id: sportID,
          },
        },
      },
    });

    const newPhone = await prisma.userPhone.create({
      data: {
        phone_number: coach.phone_number,

        user: {
          connect: {
            user_id: newCoachID,
          },
        },
      },
    });

    res.status(201).json(newUser);
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getCoaches,
  getCoachById,
  getCoachAvailiability,
  addCoach,
  // updateCoach,
  deleteCoach,
};