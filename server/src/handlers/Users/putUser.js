const controllPutUser = require("../../controllers/Users/controllPutUser");

const putUser = async (req, res) => {
  const { id } = req.params;
  const { banUser, userRole } = req.body;

  try {
    const updatedFields = {
      banUser: banUser, 
      userRole: userRole, 
    };
    
    const user = await controllPutUser(id, updatedFields);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putUser;
