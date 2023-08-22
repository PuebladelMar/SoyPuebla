const { Series } = require("../../db");
const { Op } = require("sequelize");

const controllPutSeries = async (id, name, image) => {
  const series = await Series.findByPk(id);
  if (!series) {
    throw new Error("series not found");
  }

  const existingSeriesWithSameName = await  Series.findOne({
    where: {
      id: { [Op.not]: id },
      [Op.or]: [{ name }, {image}],
    },
  });
  if (existingSeriesWithSameName) {
    throw new Error("A series with the same name or code already exists");
  }
  await series.update({ name, image });
  return "series updated successfully";
};

module.exports = controllPutSeries;
//