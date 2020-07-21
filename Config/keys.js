if (process.env.NODE_ENV === "production") {
  modules.exports = require("./dev");
} else {
  modules.exports = require("./dev");
}
