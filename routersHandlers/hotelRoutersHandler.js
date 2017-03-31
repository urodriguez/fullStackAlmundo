// Import controller
var hotelController = require("../controllers/hotelController");

exports.getHotelRoutersHandler = function(express){
	var hotelRoutersHandler = express.Router();

	hotelRoutersHandler.route('/hotels')  
	  .get(hotelController.findAll)
	  .post(hotelController.add);

	hotelRoutersHandler.route('/hotels/:id')  
	  .get(hotelController.findById)
	  .put(hotelController.update)
	  .delete(hotelController.delete);
	  
	return hotelRoutersHandler;  
}