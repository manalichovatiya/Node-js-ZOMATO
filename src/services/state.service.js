const { State } = require("../models");

// Create state
const createState = async (reqBody) => {
  return State.create(reqBody);
};

// Get state list
const getStateList = async () => {
  return State.find();
};

// Get state details by id
const getStateById = async (stateId) => {
  return State.findById(stateId);
};

// Get state details by name
const getStateByName = async (state_name) => {
  return State.findOne({state_name});
};

// state details update by id
const updateDetails = async (stateId, reqBody) => {
  return State.findByIdAndUpdate(stateId, { $set: reqBody });
};

// Delete state
const deleteState = async (stateId) => {
  return State.findByIdAndDelete(stateId);
};

module.exports = {
  createState,
  getStateList,
  getStateById,
  getStateByName,
  updateDetails,
  deleteState,
};