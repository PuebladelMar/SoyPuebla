

//! elmino por completo de la base de datos
const { Colors } = require('../../db'); // Asegúrate de importar el modelo adecuadamente

const controllDeleteColor = async (id) => {
  try {
    const color = await Colors.findByPk(id);
    if (!color) throw Error('Color no encontrado');

    await color.destroy();

    return { message: 'Color eliminado exitosamente' };
  } catch (error) {
    console.error('Error en el controlador:', error);
    throw error;
  }
};

// module.exports = controllDeleteColor;

//! actualizo en la base de datos

// const { Colors } = require('../../db');

// const controllDeleteColor = async (id) => {
//   try {
//     const color = await Colors.findByPk(id);
//     if (!color) throw Error('Color no encontrado');

//     await Colors.update({ enabled: false }, { where: { id } });

//     return { message: 'Color eliminado exitosamente' };
//   } catch (error) {
//     console.error('Error en el controlador:', error);
//     throw error;
//   }
// };

// module.exports = controllDeleteColor;
