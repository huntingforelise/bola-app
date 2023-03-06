"use strict";

const game = require("../models/game.js");
const user = require("../models/user.js");

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
    const userID = ctx.request.body.userId;
    const gameToBeUpdated = await game.findById(gameID);
    const userToBeUpdated = await user.findById(ctx.request.body.userId);
    if (gameToBeUpdated.subscribedlist.length < gameToBeUpdated.maxplayers) {
      await game.updateOne(gameToBeUpdated, {
        $addToSet: { subscribedlist: userID },
      });
      await user.updateOne(userToBeUpdated, {
        $addToSet: { gameslist: gameID },
      });
      const updatedGame = await game.findById(gameID);
      ctx.body = updatedGame;
      ctx.status = 201;
    }
  } catch (e) {
    // console.log(e.message);
    console.log(e);
    ctx.status = 500;
  }
};

exports.unjoin = async (ctx) => {
  try {
    const gameID = ctx.params.id;
    const userID = ctx.request.body.userId;
    const gameToBeUpdated = await game.findById(gameID);
    const userToBeUpdated = await user.findById(ctx.request.body.userId);
    await game.updateOne(gameToBeUpdated, {
      $pullAll: { subscribedlist: [userID] },
    });
    await user.updateOne(userToBeUpdated, {
      $pullAll: { gameslist: [gameID] },
    });
    const updatedGame = await game.findById(gameID);
    ctx.body = updatedGame;
    ctx.status = 201;
  } catch (e) {
    // console.log(e.message);
    console.log(e);
    ctx.status = 500;
  }
};
