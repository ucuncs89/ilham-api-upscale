require("dotenv").config();
module.exports = {
  servers: [
    {
      url: `http://localhost:${process.env.PORT || 4000}`,
      description: "Local server",
    },
  ],
};
