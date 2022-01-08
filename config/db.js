//Including mongoose package
const mongoose = require("mongoose");

//Creating Mongo URI
const URI =
  "mongodb://abhey14:abhey123@mentor-shard-00-00.hucwo.mongodb.net:27017,mentor-shard-00-01.hucwo.mongodb.net:27017,mentor-shard-00-02.hucwo.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-rnmza4-shard-0&authSource=admin&retryWrites=true&w=majority";

//Bulding the connection here
const connectDB = async () => {
  try {
    //console.log("connecting to database");
    await mongoose.connect(URI, {
      useNewUrlParser: true, // for warnings
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true, // for warnings
    });
    console.log("Database Connected...");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
