const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

const cookieParser = require('cookie-parser');

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
const arcadeRoutes = require('./src/routes/arcade.route')



const authenticateToken = require("./src/middlewares/authenticateToken");
const authorizePlayer = require("./src/middlewares/authorizePlayer");
// const authorizeCoach = require("../middlewares/authorizeCoach");
// const authorizeManager = require("../middlewares/authorizeManager");





app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(arcadeBookingRoutes);
app.use(zoneDiscountRoutes);
app.use(playerRoutes);
app.use(coachRoutes);
app.use(arcadeManagerRoutes);
app.use(arcadeRatingsRoutes);
app.use(loginRoutes);
app.use(logoutRoutes);
app.use(payment);
app.use(admin)
// app.use(coachCardRoutes);
app.use(coachAssignArcadeRoutes);
app.use(arcadeRoutes);


app.get("/", (req, res) => {
  res.send("Backend Server is Running");
});



// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Protected route accessed successfully', user: req.user});
// });


app.get('/api/coaches', authenticateToken,authorizePlayer, (req, res) => {

  res.status(200).json();
});


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}\n⭐️`)
);
