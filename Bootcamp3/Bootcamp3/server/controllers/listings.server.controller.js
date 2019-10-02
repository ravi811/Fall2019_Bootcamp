
/* Dependencies */
var mongoose = require('mongoose'), 
    Listing = require('../models/listings.server.model.js'),
    coordinates = require('./coordinates.server.controller.js');


/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var listing = new Listing(req.body);

  /* save the coordinates (located in req.results if there is an address property) */
  if(req.results) {
    listing.coordinates = {
      latitude: req.results.lat, 
      longitude: req.results.lng
    };
  }
 
  /* Then save the listing */
  listing.save(function(err) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    } else {
      res.json(listing);
      console.log(listing)
    }
  });
};

/* Show the current listing */
exports.read = function(req, res) {
  /* send back the listing as json from the request */
  res.json(req.listing);
};

/* Update a listing - note the order in which this function is called by the router*/
exports.update = function(req, res) {
  var listing = req.listing;

  /* Replace the listings's properties with the new properties found in req.body */
  Listing.findById(listing, function(err, listing){
    if(err) throw (err);
     listing.name= req.body.name;
     listing.code= req.body.code; 
     listing.coordinates= req.body.coordinates;
     listing.address= req.body.address;
     res.json(listing);
  }
  
  );

  /*save the coordinates (located in req.results if there is an address property) */
  if(req.results) {
    listing.coordinates = {
      latitude: req.results.lat, 
      longitude: req.results.lng
    };
  }

  listing.save(function(err){
    if(err) throw (err);
    else{
    console.log('Successful update');
    console.log(res.body);
    
   // res.results = req.results;
   // res.body._id = 1;
    res.statusCode = 200;  
    res.end();
    
    }
  })
  /* Save the listing */

};

/* Delete a listing */
exports.delete = function(req, res) {
  var listing = req.listing;
  Listing.findByIdAndRemove(listing._id,function(err, listing){
    if(err) throw (err);
    else 
    res.statusCode = 200;
    res.json(req.listing);
  })

};

/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Listing.find({},function(err,listing){ if (err) throw (err)
    else
    res.json(listing);}).sort({code: 1});
 
};

/* 
  Middleware: find a listing by its ID, then pass it to the next request handler. 

  HINT: Find the listing using a mongoose query, 
        bind it to the request object as the property 'listing', 
        then finally call next
*/


exports.listingByID = function(req, res, next, id) {
  Listing.findById(id).exec(function(err, listing) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.listing = listing;
      next();
    }
  });
};