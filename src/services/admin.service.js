const { PrismaClient, Role } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");




const getAdmins = async () => {
  return await prisma.admin.findMany({
    include: {
      user: true 
    }
  });
};






const addAdmin = async (req,res,admin) => {

  const existingAdmin = await prisma.user.findUnique({
    where: {
      email:admin.email,
    },
  });
  if (existingAdmin) {
    return res.status(400).json({ error: "Email is already registered" });
  }

  const hashedPassword = await bcrypt.hash(admin.password, 10);

  async function generateUserID() {
    const userCount = await prisma.admin.count(); // Get the count of existing users
    const paddedID = String(userCount + 1).padStart(5, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `A${paddedID}`;
  }

  const newAdminID = await generateUserID();

  const newUser = await prisma.user.create({
    data : { 
      ...admin,
      role:Role.ADMIN,
      user_id:newAdminID,
      password:hashedPassword,
    }
  })

  const newAdmin = await prisma.admin.create({
    data:{
      user:{
        connect:{
          user_id:newAdminID,
        }
      }
    }
  })

  res.status(201).json(newUser);
}





const deleteAdmin = async (adminId) => {
  try {
    // First, find the admin based on the provided AdminId
    const admin = await prisma.admin.findUnique({
      where: {
        admin_id: adminId
      },
      include: {
        user: true // Include the associated user
      }
    });

    if (!admin) {
      throw new Error("Admin not found");
    }

    // Delete the admin
    await prisma.admin.delete({
      where: {
        admin_id: adminId
      }
    });

    // Delete the associated user
    await prisma.user.delete({
      where: {
        user_id: admin.user.user_id
      }
    });

    return admin;
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = {
  getAdmins,
  addAdmin,
  deleteAdmin,
};