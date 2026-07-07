const mongoose = require("mongoose");

const dbconnect = async () => {
  const connct = mongoose.connect(process.env.MONGO_URI);

  if (connct) {
    console.log("done");
  } else console.log("not done");
};


module.exports = dbconnect;