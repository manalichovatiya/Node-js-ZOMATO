const { Owner } = require("../models");

// Create owner
const createOwner = async (reqBody) => {
  return Owner.create(reqBody);
};

// Get owner list
const getOwnerList = async () => {
  return Owner.find();
};

// Get owner details by id
const getOwnerById = async (ownerId) => {
  return Owner.findById(ownerId);
};

// owner details update by id
const updateDetails = async (ownerId, reqBody) => {
  return Owner.findByIdAndUpdate(ownerId, { $set: reqBody });
};

// Delete owner
const deleteOwner = async (ownerId) => {
  return Owner.findByIdAndDelete(ownerId);
};

module.exports = {
  createOwner,
  getOwnerList,
  getOwnerById,
  updateDetails,
  deleteOwner,
};