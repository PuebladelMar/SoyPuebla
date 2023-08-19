const { Colors } = require("../../db");

const controllPutColor = async (id, name, codHex) => {
    const color = await Colors.findByPk({
        where: {
            id,
        }
    });
  const created = await Colors.findOne({
    where: {
      name,
    },
  });
  if (created) throw Error("color ya existente");
   await color.update({name:name, codHex:codHex})

  return color;
};

module.exports = controllPutColor;
