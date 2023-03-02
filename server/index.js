"use strict";

const Koa = require("koa");
const cors = require("@koa/cors");
const app = new Koa();
const bodyParser = require("koa-bodyparser");

const router = require("./router.js");

app.use(cors());
app.use(bodyParser());
app.use(router.routes());

const port = 3000;

app.listen(port);

console.log(`Server listening on port ${port}`);
