const express = require("express");
const app = express();
const cors = require("cors");

const arcadeBookingRoutes = require("./src/routes/arcadeBooking.route");
const discountCardRoutes = require("./src/routes/form.discountcard.route");
const playerRoutes = require("./src/routes/player.route");
const coachRoutes = require("./src/routes/coach.route");
const arcadeManagerRoutes = require("./src/routes/arcadeManager.route");

app.use(express.json());
app.use(cors());

app.use(arcadeBookingRoutes);
app.use(discountCardRoutes);
app.use(playerRoutes);
app.use(coachRoutes);
app.use(arcadeManagerRoutes);











app.listen(8000, () => {
  console.log("Server running on port 8000");
});

