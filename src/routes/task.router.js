const { Router } = require("express");
const router = Router();
const taskController = require("../controllers/task.controller");
const {
  querySchema,
  bodySchema,
  paramsSchema,
} = require("../schema/task.schema");
const validator = require("express-joi-validation").createValidator({
  passError: true,
});

router.get("/", validator.query(querySchema), taskController.getListTaks);
router.post("/", validator.body(bodySchema), taskController.createTasks);
router.get(
  "/:id",
  validator.params(paramsSchema),
  taskController.getDetailTask
);
router.patch(
  "/:id",
  validator.params(paramsSchema),
  validator.body(bodySchema),
  taskController.patchTasks
);
router.delete("/:id", taskController.delete);

module.exports = router;
