console.log("Populating DB");

const mongoose = require("mongoose");
const conf = require("./config");
const user = require("./models/user");

mongoose.connect(`${conf.mongoUrl}:${conf.mongoPort}/${conf.dbName}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

try {
  const userOne = user.create({
    firstname: "Jane",
    username: "jane-test",
    password: "test",
    level: "beginner",
  });
  const userTwo = user.create({
    firstname: "John",
    username: "john-test",
    password: "test",
    level: "intermediate",
  });
  const userThree = user.create({
    firstname: "Sarah",
    username: "sarah-test",
    password: "test",
    level: "advanced",
  });
} catch (e) {
  console.log(e);
}

console.log("DB populated!");
