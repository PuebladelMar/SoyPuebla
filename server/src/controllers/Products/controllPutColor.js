const { Colors } = require("../../db");
const { Op } = require("sequelize");

const controllPutColor = async (id, name, codHex) => {
  const color = await Colors.findByPk(id);
  if (!color) {
    throw new Error("Color not found");
  }

  const existingColorWithSameNameOrHex = await Colors.findOne({
    where: {
      id: { [Op.not]: id },
      [Op.or]: [{ name }, { codHex }],
    },
  });
  if (existingColorWithSameNameOrHex) {
    throw new Error("A color with the same name or code already exists");
  }
  await color.update({ name, codHex });
  return "Color updated successfully";
};

module.exports = controllPutColor;
// const controllPutColor = async (id, name, codHex) => {
//   try {
//     console.log('Datos del controlador', { id, name, codHex });
//     const color = await Colors.findByPk(id);
//     if (!color) throw Error("Color no encontrado");

//     const existingColor = await Colors.findOne({
//       where: {
//         name,

//       },
//     });

//     if (existingColor) throw Error("Color ya existente");

//     color.name = name;
//     color.codHex = codHex;
//     await color.save();

//     return color;
//   } catch (error) {
//     console.error("Error en el controlador:", error);
//     throw error;
//   }
// };



