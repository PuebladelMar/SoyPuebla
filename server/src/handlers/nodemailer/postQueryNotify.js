const { controllPostQueryNotify } = require("../../controllers/NodeMailer/controllPostQueryNotify");

const postQueryNotify = async (req, res) => {
  try {
    const newQuery = await controllPostQueryNotify(req);
    res.status(201).json({
      message: `Email enviado con éxito al usuario a ${newQuery.user_email}`,
      query: newQuery,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postQueryNotify;
