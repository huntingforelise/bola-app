"use strict";

const Router = require("koa-router");
const router = new Router();

const game = require("./controllers/game.js");

router.get("/games", game.getAll);
router.post("/games", game.post);
router.put("/games/:id", game.join);

module.exports = router;
