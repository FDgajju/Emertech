const metaData = require("../../data/metadata.json");

const getMetaData = (req, res) => {
  res.status(200).send({ status: true, data: metaData });
};

const getMetaDataById = (req, res) => {
  const { params } = req;
  const { id } = params;

  const find = metaData.filter((el) => el.id == id);
  // console.log(find, id);
  if (!find || find.length == 0) {
    return res.status(404).send({status: "not exist", message: "meta data not exist"});
  }
  res.status(200).send({ status: true, data: find });
};

module.exports = { getMetaData, getMetaDataById };
