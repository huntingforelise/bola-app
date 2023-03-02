"use strict";

const game = require("../models/game.js");

exports.getAll = async (ctx) => {
  try {
    ctx.body = await game.find();
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};

exports.post = async (ctx) => {
  try {
    const output = await game.create(ctx.request.body);
    ctx.body = output;
    ctx.status = 201;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};

exports.join = async (ctx) => {
  try {
    const gameID = ctx.params.id;
    const gameToBeUpdated = await game.findById(gameID);
    await game.updateOne(gameToBeUpdated, {
      subscribedplayers: gameToBeUpdated.subscribedplayers + 1,
    });
    const updatedGame = await game.findById(gameID);
    ctx.body = updatedGame;
    ctx.status = 201;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
