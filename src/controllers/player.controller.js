const playerService = require("../services/player.service");

// const { PrismaClient } = require('@prisma/client');
// const prisma = new PrismaClient();


// const getPlayer = async (req, res) => {
//   try {
//     const players = await playerService.getPlayers();
//     res.status(200).json(players);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const addPlayer = async (req, res) => {
//   try {
//     const player = req.body;
//     const newPlayer = await playerService.addPlayer(
//       player
//     );
//     res.status(201).json(newPlayer);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const updatePlayer = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const number = parseInt(id);
//     const player = req.body;
//     const updatedPlayer = await playerService.updatePlayer(number, player);
//     res.status(200).json(updatedPlayer);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// const deletePlayer = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const number = parseInt(id);
//     await playerService.deletePlayer(number);
//     res.status(200).json({ message: "Player deleted" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };







// new controllers
const addPlayer = async (req, res) => {
  try {
    const player = req.body;
    
    // Check if player object exists and contains email
    // if (!player || !player.email) {
    //   return res.status(400).json({ error: "Player data is missing or malformed" });
    // } 

  
    const newPlayer = await playerService.addPlayer(player);

    res.status(201).json(newPlayer);
  }
   catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  // getPlayer,
  addPlayer,
  // updatePlayer,
  // deletePlayer,
};
