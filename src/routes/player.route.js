const express = require("express");
const router = express.Router();
const playerController= require("../controllers/player.controller");

router.get("/api/getplayer", playerController.getPlayer);
router.post("/api/addplayer", playerController.addPlayer);
router.put("/api/updateplayer/:id", playerController.updatePlayer);
router.delete("/api/deleteplayer/:id", playerController.deletePlayer);


module.exports = router;