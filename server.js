const express = require("express");
const app = express();
const cors = require("cors");

const arcadeBookingRoutes = require("./src/routes/arcadeBooking.route");

app.use(express.json());
app.use(cors());

app.use(arcadeBookingRoutes);

app.listen(8000, () => {
  console.log("Server running on port 8000");
});
