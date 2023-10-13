const { Admin } = require("../models");

// Create admin
const createAdmin = async (reqBody) => {
  return Admin.create(reqBody);
};

// Get admin list
const getAdminList = async () => {
  return Admin.find();
};

// Get admin details by id
const getAdminById = async (adminId) => {
  return Admin.findById(adminId);
};

// admin details update by id
const updateDetails = async (adminId, reqBody) => {
  return Admin.findByIdAndUpdate(adminId, { $set: reqBody });
};

// Delete admin
const deleteAdmin = async (adminId) => {
  return Admin.findByIdAndDelete(adminId);
};

module.exports = {
  createAdmin,
  getAdminList,
  getAdminById,
  updateDetails,
  deleteAdmin,
};