module.exports = {
  get: {
    tags: ["task CRUD operations"],
    description: "Get tasks",
    operationId: "getTaskList",
    parameters: [
      {
        name: "page",
        in: "query",

        required: false,
      },
      {
        name: "page_size",
        in: "query",
        required: false,
      },
      {
        name: "search",
        in: "query",
        required: false,
      },
    ],
    responses: {
      200: {
        description: "tasks were obtained",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/task",
            },
          },
        },
      },
    },
  },
};
