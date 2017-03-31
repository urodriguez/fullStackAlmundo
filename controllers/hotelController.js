var mongoose = require('mongoose');
//Import models
var Hotel  = require("../models/hotel").hotelModel;

exports.findAll = function(req, res) {  
    Hotel.find(function(err, hotels){ 
		if(err) res.send(500, err.message);

		console.log('GET/api/hotels');

        var responseHotels = {
            hotels: hotels
        }
        
		res.status(200).jsonp(responseHotels);
		});
};


exports.findById = function(req, res) {  
	var findByIdCallback = 
	function(err, hotel){
		if(err) return res.send(500, err.message);

		console.log('GET/api/hotel/' + req.params.id);
		res.status(200).jsonp(hotel);
    };
	
    Hotel.findById(req.params.id, findByIdCallback); //luego de realizar la busqueda ejecuta el callback
};


exports.add = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var hotel = new Hotel({ //creo un nuevo hotel en base a lo recibido en el request
        name:    req.body.name,
        stars:   req.body.stars,
        price:   req.body.price
    });

    hotel.save(function(err, hotel) { //almaceno el hotel en la base de datos
        if(err) return res.status(500).send( err.message);
		res.status(200).jsonp(hotel);
    });
};


exports.update = function(req, res) {
	console.log('UPDATE');
    console.log(req.body);
	
    Hotel.findById(req.params.id, function(err, hotel) { //"hotel" es el objeto que me devuelve la busqueda
        
		//actualizo todos los campos de ese "hotel"
        hotel.name =   	req.body.name;
        hotel.stars =   req.body.stars;
        hotel.price =   req.body.price;

        hotel.save(function(err) { //almaceno en la base "hotel" para que quede actualizada con los nuevos cambios
            if(err) return res.status(500).send(err.message);
			res.status(200).jsonp(hotel);
        });
    });
};


exports.delete = function(req, res) {
	console.log('DELETE');	
	console.log(req.params.id);
	
    Hotel.findById(req.params.id, function(err, hotel) {
        hotel.remove(function(err) {
            if(err) return res.status(500).send(err.message);
			res.status(200).send(hotel);
        })
    });
};


