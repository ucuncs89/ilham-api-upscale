const { Model } = require("objection");
const knex = require("../../config/db");

Model.knex(knex);

class TasksModel extends Model {
  static get tableName() {
    return "tasks";
  }
  static get idColumn() {
    return "id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["title"],

      properties: {
        id: { type: "integer" },
        title: { type: "string" },
        description: { type: "string" },
        is_complete: { type: "boolean" },
        created_at: { type: "string" },
      },
    };
  }
}

module.exports = TasksModel;
