"use strict";

const mongoose = require("./");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  gameslist: Array,
});

const user = mongoose.model("user", userSchema);

module.exports = user;
