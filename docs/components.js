module.exports = {
  components: {
    schemas: {
      id: {
        type: "integer",
        description: "An id of a todo",
        example: 1,
      },
      Task: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            description: "Todo identification number",
            example: 1,
          },
          title: {
            type: "string",
            description: "Todo's title",
            example: "Coding in JavaScript",
          },
          completed: {
            type: "boolean",
            description: "The status of the todo",
            example: false,
          },
        },
      },
      TaskInput: {
        type: "object",
        properties: {
          title: {
            type: "string",
            description: "tasks title",
            example: "Coding in JavaScript",
          },
          description: {
            type: "string",
            description: "description task",
            example: "Coding in JavaScript",
          },
          is_complete: {
            type: "boolean",
            description: "The status of the todo",
            example: false,
          },
        },
      },
      Error: {
        type: "object",
        properties: {
          message: {
            type: "string",
          },
          internal_code: {
            type: "string",
          },
        },
      },
    },
  },
};
