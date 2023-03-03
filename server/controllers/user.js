"use strict";

const user = require("../models/user.js");

exports.post = async (ctx) => {
  try {
    const allUsers = await user.find();
    console.log(allUsers);
    const output = ctx.request.body;
    console.log(output);
    for (const user of allUsers) {
      if (
        user.username === output.username &&
        user.password === output.password
      ) {
        ctx.body = user;
      }
    }
    console.log(ctx.body);
    ctx.status = 201;
  } catch (e) {
    console.log(e);
    ctx.status = 500;
  }
};
