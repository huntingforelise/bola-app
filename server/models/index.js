const mongoose = require("mongoose");
const conf = require("../config");

mongoose.connect(`mongodb://127.0.0.1:27017/${conf.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
