"use strict";

const user = require("../models/user.js");

exports.post = async (ctx) => {
  try {
    const allUsers = await user.find();
    const output = ctx.request.body;
    for (const user of allUsers) {
      if (
        user.username === output.username &&
        user.password === output.password
      ) {
        ctx.body = user;
      }
    }
    ctx.status = 201;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};

exports.getAll = async (ctx) => {
  try {
    ctx.body = await user.find({}, { firstname: 1 });
    ctx.status = 200;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
