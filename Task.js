const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  completed: Boolean,
  userId: String
});

module.exports = mongoose.model("Task", TaskSchema);
