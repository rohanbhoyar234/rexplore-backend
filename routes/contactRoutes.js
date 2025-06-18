// routes/contactRoutes.js

const express = require("express");
const Contact = require("../models/Contact");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: "Contact message saved." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save contact message." });
  }
});

module.exports = router;
