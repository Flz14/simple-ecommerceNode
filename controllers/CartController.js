const Order = require("../models/Order");
const validators = require("../middleware/UserInputValidator");

exports.addItemToCart = async (req, res, next) => {
  try {
    // const { value, error } = validators.orderSchema.validate(req.body);
    if (!error) {
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ errors: [{ message: error.message }] });
    }
  } catch (err) {
    console.error(err.errors);
    return res.status(400).json({ errors: err.errors });
  }
};
