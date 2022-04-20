const { Bank } = require("../../models");

const addBank = async (req, res) => {
  const result = await Bank.create({ ...req.body });

  res.status(201).json(result);
};

module.exports = addBank;
