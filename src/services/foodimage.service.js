const { FoodImage } = require("../models");

// Create foodimage
const createFoodimage = async (reqBody) => {
  return FoodImage.create(reqBody);
};

// Get foodimage list
const getFoodimageList = async () => {
  return FoodImage.find();
};

// Get foodimage details by id
const getFoodimageById = async (foodimageId) => {
  return FoodImage.findById(foodimageId);
};

// foodimage details update by id
const updateDetails = async (foodimageId, reqBody) => {
  return FoodImage.findByIdAndUpdate(foodimageId, { $set: reqBody });
};

// Delete foodimage
const deleteFoodimage = async (foodimageId) => {
  return FoodImage.findByIdAndDelete(foodimageId);
};

module.exports = {
  createFoodimage,
  getFoodimageList,
  getFoodimageById,
  updateDetails,
  deleteFoodimage,
};