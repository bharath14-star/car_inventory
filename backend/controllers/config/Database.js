const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://bharath:bharath@cluster0.mcnlrgp.mongodb.net/?appName=Cluster0"
const MONGO_LOCAL_URI = "mongodb://localhost:27017/car_portal";

// Establish two connections
const atlasConnection = mongoose.createConnection(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const localConnection = mongoose.createConnection(MONGO_LOCAL_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = { atlasConnection, localConnection, MONGO_URI };
