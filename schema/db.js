const { reconDB } = require('reconlx')

require("dotenv").config();

const db = new reconDB({
    uri : "mongodb+srv://OceanYT:Same_time*@softie.ic3xz.mongodb.net/Data2"
  })

module.exports = db;