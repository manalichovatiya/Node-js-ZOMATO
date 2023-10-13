const { foodimageService } = require("../services");

/** create foodimage */
const createFoodimage = async (req, res) => {
  try {
    const reqBody = req.body;
    const foodimage = await foodimageService.createFoodimage(reqBody);
    if (!foodimage) {throw new Error("Something went wrong, please try again or later!")}
    res.status(200).json({
      success: true,
      message: "Foodimage create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get foodimage list */
const getFoodimageList = async (req, res) => {
  try {
    const getList = await foodimageService.getFoodimageList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get foodimage list successfully!",
      data: getList ,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get foodimage details by id */
const getFoodimageDetails = async (req, res) => {
  try {
    const getDetails = await foodimageService.getFoodimageById(req.params.foodimageId);
    if (!getDetails) {throw new Error("Foodimage not found!")}
    res.status(200).json({
      success: true,
      message: "Foodimage details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** foodimage details update by id */
const updateDetails = async (req, res) => {
  try {
    const reqBody = req.body;
    const foodimageId = req.params.foodimageId;
    const foodimageExists = await foodimageService.getFoodimageById(foodimageId);
    if (!foodimageExists) {throw new Error("Foodimage not found!")}
    await foodimageService.updateDetails(foodimageId, reqBody);

    res.status(200)
      .json({ success: true, message: "Foodimage details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete foodimage */
const deleteFoodimage = async (req, res) => {
  try {
    const foodimageId = req.params.foodimageId;
    const foodimageExists = await foodimageService.getFoodimageById(foodimageId);
    if (!foodimageExists) { throw new Error("Foodimage not found!")}
    await foodimageService.deleteFoodimage(foodimageId);

    res.status(200).json({
      success: true,
      message: "Foodimage delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createFoodimage,
  getFoodimageList,
  getFoodimageDetails,
  updateDetails,
  deleteFoodimage,
};