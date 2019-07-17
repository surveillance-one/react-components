let env;
if (NODE_ENV === "production") env = require("./dist/index.js");
else env = require("./src/lib/index.js");

module.exports = env;
