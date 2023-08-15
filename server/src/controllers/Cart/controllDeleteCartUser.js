const { Carts, Stocks } = require("../../db.js");

const deleteCartUserController = async (id, sale) => {
  if(sale === "false"){
    const carts = await Carts.findAll({where:{UserId: id}});
    carts.map(async(cart)=>{
      const stock = await Stocks.findByPk(cart.StockId);
      stock.amount += cart.quantity;
      await stock.save();
    });
  };
  await Carts.destroy({where: { UserId: id }});

  return { message: "CartUser deleted successfully." };
  
};

module.exports = deleteCartUserController;
