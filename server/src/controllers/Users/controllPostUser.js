const { Users } = require("../../db.js");

const controllPostUser = async (req) => {
  const { clerkId } = req.body;

  const [newUser, created] = await Users.findOrCreate({
    where: {
      clerkId,
    },
  });

  let message = "";
  if (!created) message = "Inicio de sesión exitoso";
  if (created) message = "Usuario creado correctamente";

  return {
    newUser,
    message,
  };
};

module.exports = controllPostUser;