const getInfoController= require("../../controllers/Information/controllGetInfo")

const getInfo = async (req, res) => {
  try {
    const categories = await getInfoController();
    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
};

module.exports = getInfo;
