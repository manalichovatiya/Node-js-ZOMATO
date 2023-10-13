const { RestImage } = require("../models");

// Create restimage
const createRestimage = async (reqBody) => {
  return RestImage.create(reqBody);
};

// Get restimage list
const getRestimageList = async () => {
  return RestImage.find();
};

// Get restimage details by id
const getRestimageById = async (restimageId) => {
  return RestImage.findById(restimageId);
};

// restimage details update by id
const updateDetails = async (restimageId, reqBody) => {
  return RestImage.findByIdAndUpdate(restimageId, { $set: reqBody });
};

// Delete restimage
const deleteRestimage = async (restimageId) => {
  return RestImage.findByIdAndDelete(restimageId);
};

module.exports = {
  createRestimage,
  getRestimageList,
  getRestimageById,
  updateDetails,
  deleteRestimage,
};