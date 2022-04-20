const { NotFound } = require("http-errors");

const { Bank } = require("../../models");

const getBankById = async (req, res) => {
  const { bankId } = req.params;
  const bank = await Bank.findOne({ _id: bankId });

  if (!bank) {
    throw new NotFound(`Contact with id=${bankId} not found`);
  }

  res.json(bank);
};

module.exports = getBankById;
