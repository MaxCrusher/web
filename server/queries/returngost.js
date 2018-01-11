
var mySql = require('mysql');
var gosts =[];
var connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test',
    port: 3306
});
connection.connect(function(error){
    if(!!error){
        console.log('-');

    }else{
        console.log('connect')
    }
});

    connection.query("SELECT * FROM gosts", function(error, rows){
        if(!!error){
            console.log('error');      
        }
        else{
            console.log('cool');
            gosts=rows;
          
        }
    });
    function getAllGostList(){
        return gosts;
    };
    module.exports = {
        getAllGostList: getAllGostList
    };