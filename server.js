const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 8000;

const arcadeBookingRoutes = require("./src/routes/arcadeBooking.route");
const discountCardRoutes = require("./src/routes/form.discountcard.route");
const playerRoutes = require("./src/routes/player.route");
const coachRoutes = require("./src/routes/coach.route");
const arcadeManagerRoutes = require("./src/routes/arcadeManager.route");
const coachCardRoutes = require("./src/routes/form.coachCard.route");
const arcadeRatingsRoutes = require("./src/routes/arcadeRatings.route");
const loginRoutes = require("./src/routes/login.route");
const payment = require("./src/routes/paymentHandle.route");
const admin = require("./src/routes/admin.route");


const authenticateToken = require("./src/middlewares/authenticateToken");


app.use(express.json());
app.use(cors());

app.use(arcadeBookingRoutes);
app.use(discountCardRoutes);
app.use(playerRoutes);
app.use(coachRoutes);
app.use(arcadeManagerRoutes);
app.use(arcadeRatingsRoutes);
app.use(loginRoutes);
app.use(payment);
app.use(admin)


app.use(coachCardRoutes);

app.get("/", (req, res) => {
  res.send("Backend Server is Running");
});



// app.get('/api/protected', authenticateToken, (req, res) => {
//   res.json({ message: 'Protected route accessed successfully', user: req.user});
// });


// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}\n⭐️`)
);
