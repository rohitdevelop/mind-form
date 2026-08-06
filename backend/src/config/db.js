const mongoose = require("mongoose");

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ Database Connected");
  } catch (err) {
    console.log("❌ Database Error");
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = dbconnect;