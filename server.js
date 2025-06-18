// backend/server.js

const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const bookingRoutes = require("./routes/bookingRoutes"); 

const contactRoutes  = require("./routes/contactRoutes.js");

dotenv.config();

const app = express();
connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/bookings", bookingRoutes); 
app.use("/api/Contact", contactRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
