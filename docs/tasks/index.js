const getTasksList = require("./get-task-list");
const getTask = require("./get-task");
const createTask = require("./create-task");
const updateTask = require("./update-task");
const deleteTask = require("./delete-task");

module.exports = {
  paths: {
    "/tasks": {
      ...getTasksList,
      ...createTask,
    },
    "/tasks/{id}": {
      ...getTask,
      ...updateTask,
      ...deleteTask,
    },
  },
};
