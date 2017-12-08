var express = require('express');
var router = express.Router();

//controller variable
var inventory = require('../controllers/requests'); 
//model for creating blogs
require('../models/db');



//GET request for  API JSON data 
router.get('/showapi', inventory.listAPI);

// GET request to root - localhost:3000
router.get('/', function(req, res){
  res.render('index');
});


//GET routing to display all the information
router.get('/show', inventory.show);

//GET request for ONE ITEM by ID
router.get('/show/:id', inventory.findbyid);


//GET routing to the add page
router.get('/add', function(req,res){
  res.render('add');
});


//GET request for the edit page 
router.get('/add/:id', function(req,res){
  res.render('edit');
  
});

//POST request to add info
router.post('/add', inventory.add);

//DELETE request for ONE ITEM by ID
router.delete('/show/:id', inventory.delete);

//PUT request for ONE ITEM by ID 
router.put('/add/:id', inventory.edit);


module.exports = router;
