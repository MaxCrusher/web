var router = require('express').Router();
var returngost = require('../../queries/returngost');
var mySql = require('mysql');
var fs = require("fs");
var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test',
    port: 3306
});
router.get('/', function (req, res) {
    connection.query("SELECT * FROM reports;", function(error, rows){
        if(!!error){
            console.log('error');      
        }
        else{
            console.log('cool');
            res.json(rows);
            console.log(rows);
          
        }
    });
});
router.get('/xxx/:id', function (req,res){
    //res.send(req.params.id+'+');
    //console.log(req.param.id);
    connection.query("SELECT * FROM gosts WHERE id="+Number(req.params.id)+";", function (error, rows){

            if (rows) fs.createReadStream("package.json").pipe(res);// res.json(result);
            else console.log("[mysql error]",error);
    });
    
    //res.json({'path': });
    console.log(req.params.id);
    //console.log(req.body);
    //res.send(req.body+'++')
})
module.exports = router;