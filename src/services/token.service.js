const jwt = require("jsonwebtoken");
const { Token } = require("../models");
const config = require("../config/config");

// Create token
const create_Token = async (reqbody) => {
  let payload = {
    ...reqbody,
    expire_time: reqbody.expire_time.unix(),
  };
  return jwt.sign(payload, config.jwt.secret_key);
};

// /Save token
const saveToken = async (reqbody) => {
  return Token.findOneAndUpdate(
    { user: reqbody.user },
    { $set: { ...reqbody } },
    { new: true, upsert: true }
  );
};

module.exports = {
  create_Token,
  saveToken,
};