const basicInfo = require("./basicInfo.js");
const servers = require("./servers");
const components = require("./components");
const tags = require("./tags");
const tasks = require("./tasks");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...tasks,
};
