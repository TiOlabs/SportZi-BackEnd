const express = require("express");
const app = express();
const cors = require("cors");

const arcadeBookingRoutes = require("./src/routes/arcadeBooking.route");
const discountCardRoutes = require("./src/routes/form.discountcard.route");
const coachCardRoutes = require("./src/routes/form.coachCard.route");

app.use(express.json());
app.use(cors());

app.use(arcadeBookingRoutes);
app.use(discountCardRoutes);
app.use(coachCardRoutes);

app.get("/", (req, res) => {
  res.send("Backend Server is Running");
});

const PORT = process.env.PORT || 3000;

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

const server = app.listen(PORT, () =>
  console.log(`🚀 Server ready at: http://localhost:${PORT}\n⭐️`)
);
