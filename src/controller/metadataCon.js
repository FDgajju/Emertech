const metaData = require("../../data/metadata.json");

const getMetaData = (req, res) => {
  res.status(200).send({ status: true, data: metaData });
};

const getMetaDataById = (req, res) => {
  const { params } = req;
  const { id } = params;

  const find = metaData.filter((el) => el.id == id);
  // console.log(find, id);
  if (!find) {
    return res.sendStatus(404);
  }
  res.status(200).send({ status: true, data: find });
};

module.exports = { getMetaData, getMetaDataById };
