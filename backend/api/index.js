'use strict';
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Needed to get POST body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const mysql = require('mysql');
let configInfo = require("./config.json");
let connection = mysql.createConnection(configInfo.database);


connection.connect(function (err) {
    if (err) {
        //console.error('error connecting: ' + err.stack);
        throw ('error connecting: ' + err.stack);
    }
    console.log('connected as id ' + connection.threadId);
});
  
app.listen(3000, () => console.log('Example app listening on port 3000!'));

// This is needed during testing to allow access when not serving webpages
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
function dbQuery(req,res,sql){
    //res.send(sql);
    //return;
    console.log(sql);
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', JSON.stringify(results) );
        res.send(results);
      });
}


/////////////////////////////////////////////////////////////////// Setup Routes

// plural routes
const routeSQLmap = {
    "/rooms" : "SELECT * FROM room",
    "/terms" : "SELECT * FROM term",
    "/applications" : "SELECT * FROM application",
    "/students" : "SELECT * FROM student",
    "/submissions" : "SELECT * FROM submission",
    "/requests" : "SELECT * FROM request",
};
Object.keys(routeSQLmap).forEach(function(key){
    app.get(key,function(req, res){
        const sql = routeSQLmap[key];
        dbQuery(req,res,sql);
    });
})

/*
let usersRouter = express.Router();
usersRouter.get('/:id', function(req, res) {
    console.log(req.params.id);
    res.send('Got user ' + req.params.id);
});
app.use('/users', usersRouter);
*/
app.get("/students/:email" ,function(req, res){
    const sql = "SELECT * FROM student WHERE email = " + connection.escape(req.params.email); 
    dbQuery(req,res,sql);
});

app.get("/applications/:applicationID" ,function(req, res){
    const sql = "SELECT * FROM application WHERE app_id = " + connection.escape(req.params.applicationID); 
    dbQuery(req,res,sql);
});

app.get("/submissions/:submissionID" ,function(req, res){
    const sql = "SELECT * FROM submission WHERE submission_id = " + connection.escape(req.params.submissionID); 
    dbQuery(req,res,sql);
});


app.post("/submission", function(req,res){
    
    // Assuming traditional
    let requester = req.body.requester;
    let requestee = req.body.requestee;
    let app_id = req.body.app_id; // we can eventually check submission type by app ID.
    let room = req.body.room; // Alpha Beta 21
    let status = "pending";

    //if (requester == null || requestee == null || app_id == null || room == null)
    /*console.log("Requester " + requester);
    console.log("requestee " + requestee);
    console.log("app_id " + app_id);
    console.log("room " + room);
    console.log("status " + status);*/

    // Create a new submission
    let sql = `INSERT INTO submission (primary_student_email, app_id, room, sub_status)
    VALUES ("${requester}", "${app_id}", "${room}", "${status}")`;
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        let newSubID = results.insertId;
        //console.log('The results is: ', JSON.stringify(results) );
        //res.send(results);


        // Create a new request
        let sql2 = ```INSERT INTO request (requester_email, requestee_email, submission_id, request_status)
        VALUES ("${requester}", "${requestee}", ${newSubID}, "pending");```

        connection.query(sql2, function (error, results, fields) {
            let newReqID = results.insertId;
            console.log("new request " + JSON.stringify(results));

            let sql3 = ```INSERT INTO submissions_requests VALUES (${newSubID},${newReqID});```
            // Create a new submision/requests
            connection.query(sql3, function (error, results, fields) {
                console.log("new sub_request " + JSON.stringify(results));
                res.send("Success...?");
            });
        });
    
    
    
    });




    //res.send(req.body);
    //console.log(req.body);
})