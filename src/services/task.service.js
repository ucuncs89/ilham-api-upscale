const ErrorException = require("../exception/AppErroException");
const TasksModel = require("../models/tasks/tasks.model");

async function findAll(query) {
  const { page = 1, page_size = 10, search } = query;
  try {
    const data = await TasksModel.query()
      .select("tasks.*")
      .where(function () {
        if (search) {
          this.where("title", "like", `%${search}%`);
        }
      })
      .page(page - 1, page_size);
    return data;
  } catch (error) {
    throw new Error(error);
  }
}
async function findByIdTask(id) {
  const data = await TasksModel.query().findById(id);
  if (!data) {
    throw new ErrorException("Task Not Found", 404);
  }
  return data;
}
async function insertTasks(payload) {
  try {
    const insert = await TasksModel.query().insert(payload);
    return insert;
  } catch (error) {
    throw new ErrorException(error);
  }
}

async function updateTask(id, payload) {
  try {
    const update = await TasksModel.query().patchAndFetchById(id, {
      ...payload,
    });
    return update;
  } catch (error) {
    throw new Error(error);
  }
}

async function deleteTask(id) {
  try {
    const update = await TasksModel.query().deleteById(id);
    return update;
  } catch (error) {
    throw new Error(error);
  }
}
module.exports = { findAll, insertTasks, updateTask, deleteTask, findByIdTask };
