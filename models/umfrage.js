const mongoose = require("mongoose");
const { Schema } = mongoose;

const UmfrageSchema = new Schema({
    titel: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    frage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Frage",
      },
});

module.exports = mongoose.model("Umfrage", UmfrageSchema);