const express = require("express");
const route = express.Router();

const NotificationController = require("../controllers/notification.controller");

route.get(
  "/api/arcade/notifications/:id",
  NotificationController.getArcadeNotifications
);
route.get(
  "/api/coach/notifications/:id",
  NotificationController.getCoachNotifications
);
route.get(
  "/api/player/notifications/:id",
  NotificationController.getPlayerNotifications
);
route.put(
  "/api/arcade/notifications/markAsRead",
  NotificationController.arcadeNotification
);
route.put(
  "/api/coach/notifications/markAsRead",
  NotificationController.coachNotification
);
route.put(
  "/api/player/notifications/markAsRead",
  NotificationController.playerNotification
);

module.exports = route;
