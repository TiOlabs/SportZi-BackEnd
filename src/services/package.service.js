const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getPackage = async () => {
    return await prisma.package.findMany();
    };
const getPackageById = async (id) => {
    return await prisma.package.findUnique({
        where: {
        package_id: id,
        },
    });
};
const addPackage = async (package) => {
    return await prisma.package.create({
        data: {
        ...package,
        },
    });
};

const updatePackage = async (id, package) => {
    return await prisma.package.update({
        where: { package_id: id },
        data: {
        ...package,
        },
    });
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