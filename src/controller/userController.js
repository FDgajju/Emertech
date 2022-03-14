const users = require("../../data/user.json");
const axios = require("axios");

const getUser = async (req, res) => {
  try {
    const { params } = req;
    console.log("hello");
    const { id } = params;
    const metadata = await axios.get(`http://localhost:3000/metadata/${id}`);

    const find = users.find((el) => el.id == id);

    if (!find) {
      return res.sendStatus(404);
    }
    find["metadata"] = metadata.data;
    res.status(200).send({ status: true, data: find });
  } catch (err) {
    res.send(err.message);
  }
};

const getUsersWithIp = async (req, res) => {
  try {
    const metadata = await axios.get(`http://localhost:3000/metadata`);
    console.log(metadata.data)
    users.forEach((el) => {
      const meta = metadata.data.data.find((elm) => elm.id == el.id);
      el["metaData"] = meta;
    });
    res.send(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getUser, getUsersWithIp };
