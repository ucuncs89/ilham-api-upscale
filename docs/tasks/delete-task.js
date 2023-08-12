module.exports = {
  delete: {
    tags: ["task CRUD operations"],
    description: "Deleting a task",
    operationId: "deleteTask",
    parameters: [
      {
        name: "id",
        in: "path",
        schema: {
          $ref: "#/components/schemas/id",
        },
        required: true,
        description: "Deleting a done task",
      },
    ],
    responses: {
      200: {
        description: "task deleted successfully",
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
