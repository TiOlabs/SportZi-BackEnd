const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getPackage = async () => {
  return await prisma.package.findMany({
    include: {
      arcade: {
        select: {
          arcade_name: true,
          arcade_image: true,
        },
      },
      zone: {
        select: {
          zone_name: true,
        },
      },
    },
  });
};
const getPackageById = async (id) => {
  return await prisma.arcade.findUnique({
    where: {
      arcade_id: id,
    },
    include: {
      package: {
        include: {
          arcade: true,
          packageDayAndTime: true,
          zone: true,
        },
      },
    },
  });
};
const addPackage = async (package, combinedTimeslot) => {
  async function generatePackageID() {
    const packageCount = await prisma.package.count(); // Get the count of existing users
    const paddedID = String(packageCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `P${paddedID}`;
  }
  const newPackageId = await generatePackageID();
  const newPackage = await prisma.package.create({
    data: {
      package_id: newPackageId,
      package_name: package.package_name,
      description: package.description,
      package_image: package.package_image,
      rate_per_person: package.rate_per_person,
      arcade_id: package.arcade_id,
      zone_id: package.zone_id,
      percentageForCoach: package.percentageForCoach,
    },
  });
  for (const slot of combinedTimeslot) {
    // Creating new entry in packageDayAndTime table for each day and timeslot
    await prisma.packageDayAndTime.create({
      data: {
        package_id: newPackageId,
        day: slot.day,
        time: slot.timeslot,
      },
    });
  }
};

const updatePackage = async (id, package, combinedTimeslot) => {
  const Updatepackage = await prisma.package.update({
    where: { package_id: id },
    data: {
      ...package,
    },
  });
  console.log("Updatepackage", Updatepackage);
  console.log("combinedTimeslot", combinedTimeslot);

  try {
    await prisma.packageDayAndTime.deleteMany({
      where: {
        package_id: id,
      },
    });
    for (const slot of combinedTimeslot) {
      await prisma.packageDayAndTime.create({
        data: {
          package_id: id,
          day: slot.day,
          time: slot.timeslot,
        },
      });
    }
  } catch (err) {
    console.log("eeeeeeeeeeeeee", err);
  }
};

const deletePackage = async (id) => {
  return await prisma.package.delete({
    where: { package_id: id },
  });
};

module.exports = {
  getPackage,
  getPackageById,
  addPackage,
  updatePackage,
  deletePackage,
};
