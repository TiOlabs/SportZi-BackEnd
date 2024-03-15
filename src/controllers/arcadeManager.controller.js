const arcadeManagerService = require("../services/arcadeManager.service");

const getArcadeManager = async (req, res) => {
    try {
      const arcadeManagers = await arcadeManagerService.getArcadeManagers();
      res.status(200).json(arcadeManagers);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//   const addArcadeManager = async (req, res) => {
//     try {
//       const arcadeManager = req.body;
//       const newArcadeManager = await arcadeManagerService.addArcadeManager(
//         arcadeManager
//       );
//       res.status(201).json(newArcadeManager);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

//   const updateArcadeManager= async (req, res) => {
//     try {
//       const { id } = req.params;
//       const number = parseInt(id);
//       const arcadeManager = req.body;
//       const updatedArcadeManager = await arcadeManagerService.updateArcadeManagerr(
//         number,arcadeManager
//       );
//       res.status(200).json(updatedArcadeManager);
//     } catch (error) {
//       res.status(500).json({ message: error.message });
//     }
//   };

  const deleteArcadeManager= async (req, res) => {
    try {
      const { id } = req.params;
      // const number = parseInt(id);
      const deletedManager = await arcadeManagerService.deleteArcadeManager(id);
      res.status(200).json({ message: "arcadeManager deleted" , DeletedManager:deletedManager });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };





const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


//new controllers

const addArcadeManager = async (req, res) => {
  try {
    const arcadeManager = req.body;

   

    const newArcadeManager = await arcadeManagerService.addArcadeManager(req,res,arcadeManager);
  
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getArcadeManager,
  addArcadeManager,
  // updateArcadeManager,
  deleteArcadeManager
};
