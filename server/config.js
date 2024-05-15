const mongoose = require("mongoose");

mongoose.connect("mongodb://<username>:<password>@localhost:27017/<dbname>", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose;
