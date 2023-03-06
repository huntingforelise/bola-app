"use strict";

const Router = require("koa-router");
const router = new Router();

const game = require("./controllers/game.js");
const user = require("./controllers/user.js");

router.post("/login", user.post);
router.get("/users", user.getAll);
router.get("/games", game.getAll);
router.post("/games", game.post);
router.put("/games/:id/join", game.join);
router.put("/games/:id/unjoin", game.unjoin);

module.exports = router;
