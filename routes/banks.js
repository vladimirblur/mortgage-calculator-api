const express = require("express");
const { validation, controllerWrapper } = require("../../middlewares");
const { joiAddSchema, joiUpdateSchema } = require("../../models/bank");
const { banks } = require("../../controllers");

const router = express.Router();

router.get("/", controllerWrapper(banks.getAllBanks));

router.get("/:bankId", controllerWrapper(banks.getBankById));

router.post("/", validation(joiAddSchema), controllerWrapper(banks.addBank));

router.delete("/:bankId", controllerWrapper(banks.removeBank));

router.patch(
  "/:bankId",
  validation(joiUpdateSchema),
  controllerWrapper(banks.updateBankById)
);

module.exports = router;
