const { NotFound } = require("http-errors");

const { Bank } = require("../../models");

const removeContact = async (req, res) => {
  const { bankId } = req.params;
  const result = await Bank.findByIdAndRemove(bankId);
  if (!result) {
    throw new NotFound(`bank with id=${bankId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    message: "bank deleted",
    data: {
      result,
    },
  });
};

module.exports = removeContact;
