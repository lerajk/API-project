
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



module.exports.add = function (req,res){


/* var options = {
  host: url,
  port: 80,
  path: 'herokucloud.com/add',
  method: 'POST'
};

http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
}).end();

if(res.status == 'sucess')
    redirect to show page
else
    response.body.errorVariable = res.message;
    return
    */


    // add request
    //var test = JSON.stringify(req.body.category);
    data.create({
        product: req.body.product,
        price: req.body.price,
        quantity: req.body.quantity,
        description: req.body.description,
        date: req.body.date
    }, function(err,inventory){
        if(err){
            console.log('Error in processing ADD request' + ' ' + inventory + ' ' + err);
        } else {
            console.log('Succesfully Added.');
            res.redirect('http://localhost:3000/show'); 
            //res.send('Success');

        }
    });
};

//find by ID request
module.exports.findbyid = function(req,res){
    
        data.findById(req.params.id, function(err, inventory){ 
        res.send(inventory);
     

    } ) //findbyid ends here
};


//delete by ID request
module.exports.delete = function(req,res){

    data.findByIdAndRemove(req.params.id, function(err,inventory){
    if (err) throw err;
    console.log ('Data deleted with the following ID:');
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






