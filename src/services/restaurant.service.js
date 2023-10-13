const { Restaurant } = require("../models");

// Create restaurant
const createRestaurant = async (reqBody) => {
  return Restaurant.create(reqBody);
};

// Get restaurant list
const getRestaurantList = async () => {
  return Restaurant.find();
};

// Get restaurant details by id
const getRestaurantById = async (restaurantId) => {
  return Restaurant.findById(restaurantId);
};

// restaurant details update by id
const updateDetails = async (restaurantId, reqBody) => {
  return Restaurant.findByIdAndUpdate(restaurantId, { $set: reqBody });
};

// Delete restaurant
const deleteRestaurant = async (restaurantId) => {
  return Restaurant.findByIdAndDelete(restaurantId);
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  getRestaurantById,
  updateDetails,
  deleteRestaurant,
};