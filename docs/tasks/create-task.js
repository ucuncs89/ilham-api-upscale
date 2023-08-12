module.exports = {
  post: {
    tags: ["task CRUD operations"],
    description: "Create task",
    operationId: "createTask",
    parameters: [],
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
      201: {
        description: "task created successfully",
      },
      500: {
        description: "Server error",
      },
    },
  },
};
