const { Menu } = require("../models");

// Create menu
const createMenu = async (reqBody) => {
  return Menu.create(reqBody);
};

// Get menu list
const getMenuList = async () => {
  return Menu.find();
};

// Get menu details by id
const getMenuById = async (menuId) => {
  return Menu.findById(menuId);
};

// menu details update by id
const updateDetails = async (menuId, reqBody) => {
  return Menu.findByIdAndUpdate(menuId, { $set: reqBody });
};

// Delete menu
const deleteMenu = async (menuId) => {
  return Menu.findByIdAndDelete(menuId);
};

module.exports = {
  createMenu,
  getMenuList,
  getMenuById,
  updateDetails,
  deleteMenu,
};