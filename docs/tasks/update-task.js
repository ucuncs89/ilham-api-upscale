module.exports = {
  patch: {
    tags: ["task CRUD operations"],
    description: "Update task",
    operationId: "updateTask",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "Id of task to be updated",
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/TaskInput",
          },
        },
      },
    },
    responses: {
      200: {
        description: "task updated successfully",
      },
      404: {
        description: "task not found",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
