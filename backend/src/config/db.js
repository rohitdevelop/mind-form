const mongoose = require("mongoose");

const dbconnect = async () => {
  const conect = mongoose.connect(process.env.MONGO_URI);

  if (conect) {
    console.log("done");
  } else console.log("not done");
};


module.exports = dbconnect;