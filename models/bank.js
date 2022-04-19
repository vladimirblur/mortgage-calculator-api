const { Schema, model } = require("mongoose");
const Joi = require("joi");

const bankSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Set name of your bank"],
    },
    interestRate: {
      type: Number,
      required: [true, "Set the interest rate"],
    },
    maximumLoan: {
      type: Number,
      required: [true, "Set the Maximum Loan"],
    },
    minimumDownPayment: {
      type: Number,
      required: [true, "Set the Minimum Down Payment"],
    },
    loanTerm: {
      type: Date,
      required: [true, "Set the Loan Term"],
    },
  },
  { versionKey: false, timestamps: true }
);

const joiAddSchema = Joi.object({
  name: Joi.string().min(3).required(),
  interestRate: Joi.number().positive().precision(1).required(),
  maximumLoan: Joi.number().positive().precision(0).required(),
  minimumDownPayment: Joi.number().positive().precision(0).required(),
  loanTerm: Joi.date().required(),
});

const joiUpdateSchema = Joi.object({
  name: Joi.string().min(3),
  interestRate: Joi.number().positive().precision(1),
  maximumLoan: Joi.number().positive().precision(0),
  minimumDownPayment: Joi.number().positive().precision(0),
  loanTerm: Joi.date(),
});

const Bank = model("bank", bankSchema);

module.exports = {
  Bank,
  joiAddSchema,
  joiUpdateSchema,
};
