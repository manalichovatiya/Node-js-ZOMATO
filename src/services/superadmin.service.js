const { Supersuperadmin } = require("../models");

// Create superadmin
const createSuperadmin = async (reqBody) => {
  return Supersuperadmin.create(reqBody);
};

// Get superadmin list
const getSuperadminList = async () => {
  return Supersuperadmin.find();
};

// Get superadmin details by id
const getSuperadminById = async (superadminId) => {
  return Supersuperadmin.findById(superadminId);
};

// superadmin details update by id
const updateDetails = async (superadminId, reqBody) => {
  return Supersuperadmin.findByIdAndUpdate(superadminId, { $set: reqBody });
};

// Delete superadmin
const deleteSuperadmin = async (superadminId) => {
  return Supersuperadmin.findByIdAndDelete(superadminId);
};

module.exports = {
  createSuperadmin,
  getSuperadminList,
  getSuperadminById,
  updateDetails,
  deleteSuperadmin,
};