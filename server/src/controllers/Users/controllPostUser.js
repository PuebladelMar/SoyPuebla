const { Users } = require("../../db.js");

const controllPostUser = async (req) => {
  const { clerkId } = req.body;
  console.log(clerkId)

  const [newUser, created] = await Users.findOrCreate({
    where: {
      clerkId,
    },
  });
  if (!created) throw new Error("User already exists");
  return newUser;
};

module.exports = controllPostUser;