const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  birthDate: Date,
  source: String,
});

module.exports = mongoose.model("Participant", ParticipantSchema);
