const { PrismaClient, Role } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const e = require("express");

const getAdmins = async () => {
  return await prisma.user.findMany({
    include: {
      phone: true,
    },
    where: {
      role: {
        in: [Role.ADMIN, Role.SUPERADMIN],
      },
    },
  });
};

const addAdmin = async (
  firstname,
  lastname,
  email,
  password,
  phone_number,
  role
) => {
  console.log(
    "admin in serviceee",
    firstname,
    lastname,
    email,
    password,
    phone_number
  );
  const existingAdmin = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  if (existingAdmin) {
    return res.status(400).json({ error: "Email is already registered" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  async function generateUserID() {
    const userCount = await prisma.admin.count(); // Get the count of existing users
    const paddedID = String(userCount + 1).padStart(4, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `AD${paddedID}`;
  }
  async function genarateSuperAdminID() {
    const userCount = await prisma.superAdmin.count(); // Get the count of existing users
    const paddedID = String(userCount + 1).padStart(4, "0"); // Pad numeric ID with zeros to ensure it's at least 4 digits long
    return `SA${paddedID}`;
  }

  const newAdminID = await generateUserID();
  const newSuperAdminID = await genarateSuperAdminID();
  try {
    if (role === "ADMIN") {
      const newUser = await prisma.user.create({
        data: {
          email: email,
          firstname: firstname,
          lastname: lastname,
          role: Role.ADMIN,
          user_id: newAdminID,
          password: hashedPassword,
        },
      });
      const newAdmin = await prisma.admin.create({
        data: {
          user: {
            connect: {
              user_id: newAdminID,
            },
          },
        },
      });
      const newPhone = await prisma.userPhone.create({
        data: {
          phone_number: phone_number,
          user: {
            connect: {
              user_id: newAdminID,
            },
          },
        },
      });
    } else {
      const newUser = await prisma.user.create({
        data: {
          email: email,
          firstname: firstname,
          lastname: lastname,
          role: Role.SUPERADMIN,
          user_id: newSuperAdminID,
          password: hashedPassword,
        },
      });
      const newAdmin = await prisma.superAdmin.create({
        data: {
          user: {
            connect: {
              user_id: newSuperAdminID,
            },
          },
        },
      });
      const newPhone = await prisma.userPhone.create({
        data: {
          phone_number: phone_number,
          user: {
            connect: {
              user_id: newSuperAdminID,
            },
          },
        },
      });
    }

    return res.status(201).json(newUser);
  } catch (error) {
    console.log("error", error);
  }
  res.status(201).json(newUser);
};

const updateAdmin = async (
  id,
  firstname,
  lastname,
  email,
  phone,
  password,
  currentPassword,
  role
) => {
  console.log(
    "admin in serviceee",
    id,
    firstname,
    lastname,
    email,
    phone,
    password,
    currentPassword,
    role
  );
  console.log("phone-->", phone);
  console.log("password->>", password);
  try {
    // First, find the admin based on the provided AdminId
    if (role === "ADMIN") {
      const admin = await prisma.admin.findUnique({
        where: {
          admin_id: id,
        },
        include: {
          user: true, // Include the associated user
        },
      });

      if (!admin) {
        throw new Error("Admin not found");
      }

      if (password !== "") {
        if (!(await bcrypt.compare(currentPassword, admin.user.password))) {
          throw new Error("Invalid username or password...");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Update the password
        await prisma.user.update({
          where: {
            user_id: admin.user.user_id,
          },
          data: {
            password: hashedPassword,
          },
        });
      }
    } else {
      console.log("superadmin");
      const admin = await prisma.superAdmin.findUnique({
        where: {
          superAdmin_id: id,
        },
        include: {
          user: true, // Include the associated user
        },
      });

      if (!admin) {
        throw new Error("SuperAdmin not found");
      }

      if (password !== "") {
        if (!(await bcrypt.compare(currentPassword, admin.user.password))) {
          throw new Error("Invalid username or password SuperAdmin");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        // Update the password
        await prisma.user.update({
          where: {
            user_id: admin.user.user_id,
          },
          data: {
            password: hashedPassword,
          },
        });
      }
    }

    // Update the user
    await prisma.user.update({
      where: {
        user_id: admin.user.user_id,
      },
      data: {
        email: email,
        firstname: firstname,
        lastname: lastname,
      },
    });

    // Update the phone number
    // await prisma.userPhone.update({
    //   where: {
    //     user_id: admin.user.user_id,
    //   },
    //   data: {
    //     phone_number: phone,
    //   },
    // });

    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

const removeAdmin = async (id, status) => {
  console.log("admin in serviceee", id, status);
  try {
    return await prisma.user.update({
      where: {
        user_id: id,
      },
      data: {
        is_active: status,
      },
    });
  } catch (error) {
    throw new Error(error);
  }
};

const deleteAdmin = async (adminId) => {
  try {
    // First, find the admin based on the provided AdminId
    const admin = await prisma.admin.findUnique({
      where: {
        admin_id: adminId,
      },
      include: {
        user: true, // Include the associated user
      },
    });

    if (!admin) {
      throw new Error("Admin not found");
    }

    // Delete the admin
    await prisma.admin.delete({
      where: {
        admin_id: adminId,
      },
    });

    // Delete the associated user
    await prisma.user.delete({
      where: {
        user_id: admin.user.user_id,
      },
    });

    return admin;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAdmins,
  addAdmin,
  updateAdmin,
  removeAdmin,
  deleteAdmin,
};
