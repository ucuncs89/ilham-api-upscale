module.exports = {
  get: {
    tags: ["task CRUD operations"],
    description: "Get a task",
    operationId: "getTask",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "A single task id",
      },
    ],
    responses: {
      200: {
        description: "task is obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/task",
            },
          },
        },
      },
      404: {
        description: "task is not found",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Error",
              example: {
                message: "We can't find the task",
                internal_code: "Invalid id",
              },
            },
          },
        },
      },
    },
  },
};
