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

// Get restaurant details by city id
const restaurantBycity = async (cityId) => {
  return Restaurant.findById(cityId);
};

// restaurant details update by id
const updateDetails = async (restaurantId, reqBody) => {
  return Restaurant.findByIdAndUpdate(restaurantId, { $set: reqBody });
};

// Update status
const updateStatus = async (restaurantId) => {
  const restaurant = await getRestaurantById(restaurantId);
  if(!restaurant){
      throw new Error("Restaurant does not exist! ")
  }
  return Restaurant.findByIdAndUpdate(restaurantId,{$set:{restaurant_status: !restaurant.restaurant_status}},);
};

// Delete restaurant
const deleteRestaurant = async (restaurantId) => {
  return Restaurant.findByIdAndDelete(restaurantId);
};

module.exports = {
  createRestaurant,
  getRestaurantList,
  getRestaurantById,
  restaurantBycity,
  updateDetails,
  updateStatus,
  deleteRestaurant,
};