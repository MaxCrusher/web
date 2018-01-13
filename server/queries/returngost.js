
var mySql = require('mysql');
var mas =[];
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
            mas=rows;
            console.log(rows);
          
        }
    });
    connection.query("SELECT * FROM tituls;", function(error, rows){
        if(!!error){
            console.log('error');      
        }
        else{
            console.log('cool');
            mas=rows;
            console.log(rows);
          
        }
    });
    connection.query("SELECT * FROM reports;", function(error, rows){
        if(!!error){
            console.log('error');      
        }
        else{
            console.log('cool');
            mas=rows;
            console.log(rows);
          
        }
    });
        function getAllGostList(){
        return mas;
    };
    function getAllTutulList(){
        return mas;
    };
    function getAllReportList(){
        return mas;
    };
    module.exports = {
        getAllGostList: getAllGostList,
        getAllReportList: getAllReportList,
        getAllTutulList: getAllTutulList
    };