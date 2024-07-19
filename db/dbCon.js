const mongoose = require("mongoose");
const DB_URL = "mongodb://localhost:27017/AdmissionPortal";

const DBCon = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("DataBase is connected successfully");
  } catch (error) {
    console.log("DataBase is not connected", error);
  }
};

module.exports = DBCon;
