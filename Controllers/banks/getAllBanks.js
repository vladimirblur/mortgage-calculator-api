const { BadRequest } = require("http-errors");

const { Bank } = require("../../models");

const getAllBanks = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;

  const skip = (page - 1) * limit;

  if (isNaN(skip)) {
    throw new BadRequest(
      `Invalid request parameters, page and limit must be a number`
    );
  }

  const banks = await Bank.find({}, "", {
    skip,
    limit: Number(limit),
  });

  res.status(200).json(banks);
};

module.exports = getAllBanks;
