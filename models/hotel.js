var mongoose = require("mongoose"); //instancio objeto "mongoose"

var hotelSchema = new mongoose.Schema({  
  name:	 { type: String },
  stars: { type: Number },
  price: { type: Number }
});

exports.hotelModel = mongoose.model('Hotel', hotelSchema); //crea el modelo y lo exporta para que lo puedan usar otros modulos