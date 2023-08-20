const { Colors } = require("../../db");

// const controllPutColor = async (id, name, codHex) => {
//     const color = await Colors.findByPk(id);
//   const created = await Colors.findOne({
//     where: {
//       name,
//       codHex,
//     },
//   });
//   if (created) throw Error("color ya existente");
//    await color.update({name:name, codHex:codHex})

//   return color;
// };

// module.exports = controllPutColor;


const controllPutColor = async (id, name, codHex) => {
  try {
    console.log('Datos del controlador', { id, name, codHex });
    const color = await Colors.findByPk(id);
    if (!color) throw Error("Color no encontrado");

    const existingColor = await Colors.findOne({
      where: {
        name,
      },
    });

    if (existingColor) throw Error("Color ya existente");

    color.name = name;
    color.codHex = codHex;
    await color.save();

    return color;
  } catch (error) {
    console.error("Error en el controlador:", error);
    throw error;
  }
};


 module.exports = controllPutColor;
