const { Bank } = require("../../models");

const addBank = async (req, res) => {
  const result = await Bank.create({ ...req.body });

  res.status(201).json({
    status: "success",
    code: 201,
    data: {
      result,
    },
  });
};

module.exports = addBank;
