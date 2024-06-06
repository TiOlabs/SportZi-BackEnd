const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

const cookieParser = require("cookie-parser");

const arcadeBookingRoutes = require("./src/routes/arcadeBooking.route");
const zoneDiscountRoutes = require("./src/routes/zoneDiscountt.route");
const playerRoutes = require("./src/routes/player.route");
const coachRoutes = require("./src/routes/coach.route");
const arcadeManagerRoutes = require("./src/routes/arcadeManager.route");
const coachAssignArcadeRoutes = require("./src/routes/coachAssignArcade.route");
const arcadeRatingsRoutes = require("./src/routes/arcadeFeedbacks.route");
const loginRoutes = require("./src/routes/login.route");
const logoutRoutes = require("./src/routes/logout.route");
const payment = require("./src/routes/paymentHandle.route");
const admin = require("./src/routes/admin.route");
const regUserRouter = require("./src/routes/PayerDetails.route");
const arcadeRoutes = require("./src/routes/arcade.route");
const zoneRoutes = require("./src/routes/zone.route");
const userRoutes = require("./src/routes/user.route");
const authenticateToken = require("./src/middlewares/authenticateToken");
const authorizePlayer = require("./src/middlewares/authorizePlayer");
const { authorizeIDgetting } = require("./src/middlewares/autherizeIDgetting");
// const authorizeCoach = require("../middlewares/authorizeCoach");
// const authorizeManager = require("../middlewares/authorizeManager");

const coachesPage = require("./src/routes/coach.route");
const regArchade = require("./src/routes/archadeDetails.route");
const regManagesArcade = require("./src/routes/ManagersArchades.route");
const routeProtect = require("./src/routes/routeProtect.route");
const coachBookingRoutes = require("./src/routes/coachBooking.route");
const coachFeedbacksRoutes = require("./src/routes/coachFeedbacks.route");
const packageRoutes = require("./src/routes/package.route");
const regCoachDetails = require("./src/routes/coachDetails.route");
const sport = require("./src/routes/sport.route");
const packageEnrollmentPlayer = require("./src/routes/packageEnrollmentPlayer.route");
const packageEnrollmentCoach = require("./src/routes/packageEnrollmentCoach.route");
const reportRoutes = require("./src/routes/report.route");
const reportArcadeRoutes = require("./src/routes/reportArcade.route");

app.use(express.json());
app.use(cors());
app.use(cookieParser());
// app.use("/api/auth/*", authenticateToken);
app.use(arcadeBookingRoutes);
app.use(zoneDiscountRoutes);
app.use(playerRoutes);
app.use(coachRoutes);
app.use(arcadeManagerRoutes);
app.use(arcadeRatingsRoutes);
app.use(loginRoutes);
app.use(logoutRoutes);
app.use(payment);
app.use(admin);
app.use(regUserRouter);
app.use(coachRoutes);
app.use(coachAssignArcadeRoutes);
app.use(arcadeRoutes);
app.use(zoneRoutes);
app.use(userRoutes);
app.use(regArchade);
app.use(routeProtect);
app.use(regManagesArcade);
app.use(coachBookingRoutes);

app.use(coachFeedbacksRoutes);
app.use(packageRoutes);
app.use(regCoachDetails);
app.use(sport);
app.use(packageEnrollmentPlayer);
app.use(packageEnrollmentCoach);
app.use(reportRoutes);
app.use(reportArcadeRoutes);

app.get("/", (req, res) => {
  res.send("Backend Server is Running");
});

// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Protected route accessed successfully', user: req.user});
// });

// app.get('/api/coaches', authenticateToken,authorizePlayer, (req, res) => {

//   res.status(200).json();
// });

// app.get("/api/coaches", authenticateToken, authorizePlayer, (req, res) => {
//   res.status(200).json();
// });

// app.use("/api/", authenticateToken, regUserRouter, (req, res) => {
//   res.status(200).json();
// });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}\n⭐️`)
);
