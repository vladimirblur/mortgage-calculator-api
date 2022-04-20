const { NotFound } = require("http-errors");

const { Bank } = require("../../models");

const updateBankById = async (req, res) => {
  const { bankId } = req.params;
  const result = await Bank.findByIdAndUpdate(bankId, req.body, {
    new: true,
  });
  if (!result) {
    throw new NotFound(`Bank with id=${bankId} not found`);
  }

  res.json({
    status: "success",
    code: 200,
    data: {
      result,
    },
  });
};

module.exports = updateBankById;
