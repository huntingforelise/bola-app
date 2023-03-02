"use strict";

const mongoose = require("./");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  date: {
    type: Date,
    required: true,
  },
  beach: { type: String, required: true },
  maxplayers: { type: Number, required: true },
  level: { type: String, required: true },
  subscribedplayers: {
    type: Number,
    default: 0,
  },
  // hasnet: Boolean,
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
