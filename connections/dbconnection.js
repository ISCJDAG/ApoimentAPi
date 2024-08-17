const mysql = required('mysql');

//MYQSL details
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Apoiment'
});

mysqlConnection.connect( (err) => {
    if(!err)
        console.log('Connection Established Successfully');
    else
        console.log('Connection Failed ! ' + JSON.stringify(err,', ',2))
} );

MediaSourceHandle.exports = mysqlConnection;
