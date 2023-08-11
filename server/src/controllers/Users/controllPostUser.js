const { Users } = require("../../db.js");

const controllPostUser = async (req) => {
  const { clerkId } = req.body;
  console.log(clerkId)

  const [newUser, created] = await Users.findOrCreate({
    where: {
      clerkId,
    },
  });
  if (!created) return newUser;
  // modificar según la logica lo requiera
};

module.exports = controllPostUser;