const { tokenService } = require("../services");
const moment = require("moment");

/** Create token . */
const createToken = async (req, res) => {
  try {
    const reqBody = req.body;
    reqBody.expire_time = moment().add(10, "minutes");
    //Create token
    const token = await tokenService.create_Token(reqBody);
    reqBody.token = token;
    // Save token
    const saveToken = await tokenService.create_Token(reqBody);
    res
      .status(200)
      .json({ success: true, message: "Token created! ", data: saveToken });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message || "Something went wrong, please try again! ",
    });
  }
};

/** Verify token */
const verifyToken = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Token successfully verified ! ",
    data: req.user,
  });
};

module.exports = {
  createToken,
  verifyToken,
};