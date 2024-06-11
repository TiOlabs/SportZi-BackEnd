const notificationService = require("../services/notification.service");

const getArcadeNotifications = async (req, res) => {
  try {
    const { id } = req.params;
    const arcadeId = id;
    const notifications = await notificationService.getarcadeNotification(
      arcadeId
    );
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCoachNotifications = async (req, res) => {
  try {
    const { id } = req.params;
    const coachId = id;
    const notifications = await notificationService.getcoachNotification(
      coachId
    );
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getPlayerNotifications = async (req, res) => {
  console.log("dataaaaa", req.params);
  try {
    const { id } = req.params;
    console.log(id);
    const playerId = id;
    const notifications = await notificationService.getplayerNotification(
      playerId
    );
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const arcadeNotification = async (req, res) => {
  try {
    const { id } = req.body;
    const notifications = await notificationService.arcadeNotification(id);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const coachNotification = async (req, res) => {
  try {
    const { id } = req.body;
    const notifications = await notificationService.coachNotification(id);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const playerNotification = async (req, res) => {
  try {
    const { id } = req.body;
    const notifications = await notificationService.playerNotification(id);
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getArcadeNotifications,
  getCoachNotifications,
  getPlayerNotifications,
  arcadeNotification,
  coachNotification,
  playerNotification,
};
