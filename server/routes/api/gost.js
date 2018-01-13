
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
    connection.query("SELECT * FROM gosts", function(error, rows){
        if(!!error){
            console.log('error');      
        }
        else{
            console.log('cool');
            res.json(rows);     
            //console.log(rows);
          
        }
    });
});
router.get('/download/:table/:id', function (req,res){

    connection.query("SELECT * FROM " +req.params.table + " WHERE id="+Number(req.params.id)+";", function (error, rows){
            if (rows) res.download(rows[0].path)
            else console.log("[mysql error]",error);
    });
    
});
router.delete('/delete/:table/:id', function(req,res){

    connection.query("DELETE * FROM "+req.params.table+" WHERE id="+Number(req.params.id)+";",function(error, sucsess){
    });
})
module.exports = router;

