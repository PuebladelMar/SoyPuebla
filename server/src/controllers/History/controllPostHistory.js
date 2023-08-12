const { Carts, Histories } = require("../../db");

const controllPostHistory = async(userId)=>{
    const userCart = await Carts.findAll({where: { UserId: userId }});

    const insertPromises = userCart.map(async (user) => {
        await Histories.create({ quantity: user.quantity, StockId: user.StockId, UserId: user.UserId });
    });

    await Promise.all(insertPromises);

    return
};

module.exports = controllPostHistory;