const { Users } = require("../../db.js");

const controllPostUser = async (req) => {
  const { name, email, password, image } = req.body;

  const [newUser, created] = await Users.findOrCreate({
    where: {
      name,
      email,
      password,
      image
    }
  });
  if (!created) throw new Error("User already exists");
  return newUser;
};

module.exports = controllPostUser;