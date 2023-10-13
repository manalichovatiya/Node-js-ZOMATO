const { restimageService } = require("../services");

/** create restimage */
const createRestimage = async (req, res) => {
  try {
    const reqBody = req.body;
    const restimage = await restimageService.createRestimage(reqBody);
    if (!restimage) {throw new Error("Something went wrong, please try again or later!")}
    res.status(200).json({
      success: true,
      message: "Restimage create successfully!",
      data: { reqBody },
    });
  } catch (error) {
    res.status(400).json({ success: false, message:  error.message});
  }
};

/** Get restimage list */
const getRestimageList = async (req, res) => {
  try {
    const getList = await restimageService.getRestimageList(filter, options);

    res.status(200).json({
      success: true,
      message: "Get restimage list successfully!",
      data: getList ,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Get restimage details by id */
const getRestimageDetails = async (req, res) => {
  try {
    const getDetails = await restimageService.getRestimageById(req.params.restimageId);
    if (!getDetails) {throw new Error("Restimage not found!")}
    res.status(200).json({
      success: true,
      message: "Restimage details get successfully!",
      data: getDetails,
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** restimage details update by id */
const updateDetails = async (req, res) => {
  try {
    const reqBody = req.body;
    const restimageId = req.params.restimageId;
    const restimageExists = await restimageService.getRestimageById(restimageId);
    if (!restimageExists) {throw new Error("Restimage not found!")}
    await restimageService.updateDetails(restimageId, reqBody);

    res.status(200)
      .json({ success: true, message: "Restimage details update successfully!" });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

/** Delete restimage */
const deleteRestimage = async (req, res) => {
  try {
    const restimageId = req.params.restimageId;
    const restimageExists = await restimageService.getRestimageById(restimageId);
    if (!restimageExists) { throw new Error("Restimage not found!")}
    await restimageService.deleteRestimage(restimageId);

    res.status(200).json({
      success: true,
      message: "Restimage delete successfully!",
    });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = {
  createRestimage,
  getRestimageList,
  getRestimageDetails,
  updateDetails,
  deleteRestimage,
};