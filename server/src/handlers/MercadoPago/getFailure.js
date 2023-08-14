const getFailure = async (req, res) => {
  const info = req.query;
  const infoJSON = JSON.stringify(info);
  try {
    res
      .status(200)
      .redirect(
        `http://localhost:5173/pay-state/?data=${encodeURIComponent(infoJSON)}`
      );
  } catch (error) {
    res.status(500).json({ error: message.error });
  }
};

module.exports = getFailure;
