
var data = require('../models/db');

module.exports.show = function(req,res){
	res.render('show');
};


// API JSON data 
module.exports.listAPI = function (req, res) {
res.status(200);
data.find({ }, function (err, docs) {
    if(err){
        throw err;
    }
    else {
        res.send(JSON.stringify(docs));
    }
}); 

};


// add request
module.exports.add = function (req,res){

    //var test = JSON.stringify(req.body.category);
    data.create({
        product: req.body.product,
        price: req.body.author,
        quantity: req.body.quantity,
        description: req.body.description,
        date: req.body.date
    }, function(err,inventory){
        if(err){
            console.log('Error in processing ADD request');
        } else {
            console.log('Succesfully Added.');
            //res.redirect('http://localhost:3000/show'); 
            res.send('Success');

        }
    });
};

//find by ID request
module.exports.findbyid = function(req,res){
    
        data.findById(req.params.id, function(err, inventory){ 
        res.send(Inventory);
     

    } ) //findbyid ends here
};


//delete by ID request
module.exports.delete = function(req,res){

    data.findByIdAndRemove(req.params.id, function(err,inventory){
    if (err) throw err;
    console.log ('Datd deleted with the following ID:');
    console.log(req.params.id);

    })   

};


//update by ID request
module.exports.edit = function(req,res){

        let edit = {};
      
        edit.product = req.body.product_edit;
        edit.price = req.body.price_edit;
        edit.quantity = req.body.quantity_edit;
        edit.description = req.body.description_edit;
        edit.date = req.body.date_edit;

        let query = {_id:req.params.id};

        data.update(query, edit, function(err){

            if(err){ 
                console.log(err);
                return;
            } else {
                console.log('Data was updated.');
          
            }

        }); // data update 

    
}






