"use strict";

const user = require("../models/user.js");

exports.post = async (ctx) => {
  try {
    const { username, password } = ctx.request.body;
    if (!username || !password) {
      ctx.status = 400;
      ctx.body = { res: "Missing fields!", error: true };
    } else {
      const theUser = await user.find({ username: username });
      if (theUser[0].password === password) {
        ctx.status = 201;
        ctx.body = { res: theUser, error: false };
      } else if (!theUser || theUser.password !== password) {
        ctx.status = 400;
        ctx.body = { res: "Wrong username and/or password!", error: true };
      }
    }
  } catch (e) {
    ctx.status = 500;
    ctx.body = { res: "Internal Server Error!", error: true };
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
