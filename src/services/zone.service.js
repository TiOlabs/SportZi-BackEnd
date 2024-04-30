const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getZone = async () => {
  return await prisma.zone.findMany({
    include: {
      sport: true,
    },
  });
};
const getZoneById = async (id) => {
  try {
    return await prisma.arcade.findUnique({
      where: {
        arcade_id: id,
      },
      include: {
        zone: {
          include: {
            sport: true,
          },
        },
      },
    });
  } catch (error) {
    console.log("error", error);
  }
};

const addZone = async (zone) => {
  console.log("zoneeeeeeeeeeeeee", zone);

  // Extract discount-related fields from the zone object
  const { discount, discount_description, ...zoneData } = zone;
  console.log("zoneData", zoneData);

  // Create the zone entry
  const createdZone = await prisma.zone.create({
    data: {
      ...zoneData, // Pass the rest of the zone data
    },
  });

  // If discount and discount_description exist, create a discount entry
  try {
    if (discount !== undefined && discount_description) {
      // Parse discount as an integer
      const parsedDiscount = parseInt(discount);

      // Check if the parsed discount is a valid number
      if (!isNaN(parsedDiscount)) {
        console.log("discount", parsedDiscount);
        console.log("discount_description", discount_description);
        console.log("createdZone", createdZone.zone_id);

        // Create the zoneDiscount entry
        await prisma.zoneDiscount.create({
          data: {
            discount_percentage: parsedDiscount,
            description: discount_description,
            discount_image: "shcsg",
            // Assuming you have a field to link discounts to zones, like zoneId
            zone: {
              connect: {
                zone_id: createdZone.zone_id, // Connect the discount to the newly created zone
              },
            },
          },
        });
      } else {
        console.log("Invalid discount value:", discount);
      }
    }
  } catch (error) {
    console.log("Error:", error);
  }

  return createdZone;
};

const updateZone = async (id, zone) => {
  return await prisma.zone.update({
    where: { zone_id: id },
    data: {
      ...zone,
    },
  });
};

const deleteZone = async (id) => {
  return await prisma.zone.delete({
    where: { zone_id: id },
  });
};

module.exports = {
  getZone,
  getZoneById,
  addZone,
  updateZone,
  deleteZone,
};
