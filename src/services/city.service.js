const { City } = require("../models");

// Create city
const createCity = async (reqBody) => {
  return City.create(reqBody);
};

// Get city list
const getCityList = async () => {
  return City.find();
};

// Get city details by id
const getCityById = async (cityId) => {
  return City.findById(cityId);
};

// city details update by id
const updateDetails = async (cityId, reqBody) => {
  return City.findByIdAndUpdate(cityId, { $set: reqBody });
};

// Delete city
const deleteCity = async (cityId) => {
  return City.findByIdAndDelete(cityId);
};

module.exports = {
  createCity,
  getCityList,
  getCityById,
  updateDetails,
  deleteCity,
};