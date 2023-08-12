const { responseSuccess, responseFailed } = require("../utils/response");
const taskService = require("../services/task.service");
const { paginations } = require("../utils/pagination");

exports.getListTaks = async (req, res) => {
  const tasks = await taskService.findAll({
    ...req.query,
  });
  const data = {
    ...tasks,
    pagination: paginations(
      tasks.total,
      req.query.page_size,
      req.query.page,
      "/tasks"
    ),
  };
  return responseSuccess(res, "Get Data Task Lists Successfully", data, 200);
};
exports.getDetailTask = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await taskService.findByIdTask(id);
    return responseSuccess(res, "Get Detail Task Successfully", data, 200);
  } catch (error) {
    return responseFailed(res, error);
  }
};
exports.createTasks = async (req, res) => {
  try {
    const { body } = req;
    const data = await taskService.insertTasks(body);
    return responseSuccess(res, "Create Data Task Successfully", data, 201);
  } catch (error) {
    return responseFailed(res, error);
  }
};

exports.patchTasks = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const data = await taskService.updateTask(id, body);
    return responseSuccess(res, "Update Data Task Successfully", data, 200);
  } catch (error) {
    return responseFailed(res, error);
  }
};

exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await taskService.deleteTask(id);
    return responseSuccess(res, "Delete Data Task Successfully", data, 200);
  } catch (error) {
    return responseFailed(res, error);
  }
};
