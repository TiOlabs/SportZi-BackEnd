const { PrismaClient } = require("@prisma/client");
const { getIO } = require("../socket/socket");
const prisma = new PrismaClient();

const getarcadeNotification = async (arcadeId) => {
  try {
    return await prisma.notificationForArcade.findMany({
      where: {
        arcade_id: arcadeId,
        is_read: false,
      },
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const getcoachNotification = async (coachId) => {
  console.log("coachId", coachId);
  try {
    const notifications = await prisma.notificationForUser.findMany({
      where: {
        user_id: coachId,
        is_read: false,
      },
    });
    return notifications;
  } catch (error) {
    console.error("An error occurred while fetching notifications:", error);
    throw error;
  }
};
const getplayerNotification = async (playerId) => {
  console.log("playerId", playerId);
  try {
    return await prisma.notificationForUser.findMany({
      where: {
        user_id: playerId,
        is_read: false,
      },
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const arcadeNotification = async (id) => {
  try {
    return await prisma.notificationForArcade.updateMany({
      where: {
        arcade_id: id,
        is_read: false,
      },
      data: {
        is_read: true,
      },
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const coachNotification = async (id) => {
  try {
    return await prisma.notificationForUser.updateMany({
      where: {
        user_id: id,
        is_read: false,
      },
      data: {
        is_read: true,
      },
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const playerNotification = async (id) => {
  try {
    return await prisma.notificationForUser.updateMany({
      where: {
        user_id: id,
        is_read: false,
      },
      data: {
        is_read: true,
      },
    });
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutCoachRequest = async ({
  arcadeId,
  message,
}) => {
  console.log("arcadeId", arcadeId);
  console.log("message", message);
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        // Assuming you want to set isRead to false initially
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
    console.log("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToCoachAboutAcceptCoachRequest = async ({
  coachId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: coachId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`coach_${coachId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutZoneBooking = async ({
  arcadeId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotidicationToCoachAboutCoachBooking = async ({
  coachId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: coachId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`coach_${coachId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutCoachBooking = async ({
  arcadeId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToPlayerAboutZoneBooking = async ({
  playerId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: playerId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`player_${playerId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToPlayerAboutCoachBooking = async ({
  playerId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: playerId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`player_${playerId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToPlayerAboutCoachCancelCoachBooking = async ({
  playerId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: playerId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`player_${playerId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToCoachAboutCoachCancelCoachBooking = async ({
  coachId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: coachId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`coach_${coachId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutCoachCancelCoachBooking = async ({
  arcadeId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToPlayerAboutPlayerCancelCoachBooking = async ({
  playerId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: playerId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`player_${playerId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToCoachAboutPlayerCancelCoachBooking = async ({
  coachId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: coachId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`coach_${coachId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutPlayerCancelCoachBooking = async ({
  arcadeId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToPlayerAboutArcadeCancelCoachBooking = async ({
  playerId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: playerId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`player_${playerId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToCoachAboutArcadeCancelCoachBooking = async ({
  coachId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: coachId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`coach_${coachId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutArcadeCancelCoachBooking = async ({
  arcadeId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToPlayerAboutPlayerCancelZoneBooking = async ({
  playerId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: playerId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`player_${playerId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutPlayerCancelZoneBooking = async ({
  arcadeId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToArcadeAboutArcadeCancelZoneBooking = async ({
  arcadeId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForArcade.create({
      data: {
        arcade_id: arcadeId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`arcade_${arcadeId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

const sendNotificationToPlayerAboutArcadeCancelZoneBooking = async ({
  playerId,
  message,
}) => {
  try {
    const notification = await prisma.notificationForUser.create({
      data: {
        user_id: playerId,
        message: message,
        is_read: false,
      },
    });
    const io = getIO();
    io.to(`player_${playerId}`).emit("notification", notification);
  } catch (error) {
    console.log("error");
    console.log(error);
    throw error;
  }
};

module.exports = {
  getarcadeNotification,
  getcoachNotification,
  getplayerNotification,
  arcadeNotification,
  coachNotification,
  playerNotification,
  sendNotificationToArcadeAboutCoachRequest,
  sendNotificationToCoachAboutAcceptCoachRequest,
  sendNotificationToArcadeAboutZoneBooking,
  sendNotidicationToCoachAboutCoachBooking,
  sendNotificationToArcadeAboutCoachBooking,
  sendNotificationToPlayerAboutZoneBooking,
  sendNotificationToPlayerAboutCoachBooking,
  sendNotificationToPlayerAboutCoachCancelCoachBooking,
  sendNotificationToCoachAboutCoachCancelCoachBooking,
  sendNotificationToArcadeAboutCoachCancelCoachBooking,
  sendNotificationToPlayerAboutPlayerCancelCoachBooking,
  sendNotificationToCoachAboutPlayerCancelCoachBooking,
  sendNotificationToArcadeAboutPlayerCancelCoachBooking,
  sendNotificationToPlayerAboutArcadeCancelCoachBooking,
  sendNotificationToCoachAboutArcadeCancelCoachBooking,
  sendNotificationToArcadeAboutArcadeCancelCoachBooking,
  sendNotificationToPlayerAboutPlayerCancelZoneBooking,
  sendNotificationToArcadeAboutPlayerCancelZoneBooking,
  sendNotificationToArcadeAboutArcadeCancelZoneBooking,
  sendNotificationToPlayerAboutArcadeCancelZoneBooking,
};
