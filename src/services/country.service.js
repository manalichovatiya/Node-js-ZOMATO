const { Country } = require("../models");

// Create country
const createCountry = async (reqBody) => {
  return Country.create(reqBody);
};

// Get country list
const getCountryList = async () => {
  return Country.find();
};

// Get country details by id
const getCountryById = async (countryId) => {
  return Country.findById(countryId);
};

// country details update by id
const updateDetails = async (countryId, reqBody) => {
  return Country.findByIdAndUpdate(countryId, { $set: reqBody });
};

// Delete country
const deleteCountry = async (countryId) => {
  return Country.findByIdAndDelete(countryId);
};

module.exports = {
  createCountry,
  getCountryList,
  getCountryById,
  updateDetails,
  deleteCountry,
};