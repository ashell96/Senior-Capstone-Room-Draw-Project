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
        throw ('error connecting: ' + err.stack);
    }
    console.log('connected as id ' + connection.threadId);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));

// This is needed during testing to allow access when not serving webpages
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


function dbQuery(req, res, sql) {
    console.log(sql);
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', JSON.stringify(results));
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
    
    // Validate components
    if (typeof(requester) == undefined) throw "No requester sent"
    if (typeof(requestee) == undefined) throw "No requestee sent"
    if (typeof(app_id) == undefined) throw "No app_id sent"

    // Create a new submission
    let sql = `INSERT INTO submission (primary_student_email, app_id, room, sub_status)
        VALUES ("${requester}", "${app_id}", "${room}", "${status}")`;
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        let newSubID = results.insertId;
        //console.log('The results is: ', JSON.stringify(results) );
        //res.send(results);


        // Create a new request
        let sql2 = `INSERT INTO request (requester_email, requestee_email, submission_id, request_status)
        VALUES ("${requester}", "${requestee}", ${newSubID}, "pending");`;

        connection.query(sql2, function (error, results, fields) {
            console.log("new request " + JSON.stringify(results));
            res.send("Success...?");
        });
    });
    //res.send(req.body);
    //console.log(req.body);
})

function determineAppType(app_id, callback){
   
    // Validate components
    if (typeof(app_id) == undefined) throw "No app_id sent"

    let sql = "Select * from application where app_id = " + app_id;
    connection.query(sql, function (error, results, fields) {
        if (error) throw error;
        console.log('The application is: ', JSON.stringify(results));
        let result = results[0];
        console.log(result.app_type)
        callback(result.app_type);
    });

}



function traditionalSubmission(requester, requestee, app_id, res) {
    console.log("starting traditonal sub");
    let status = "pending";
    // Create a new submission
    let sql = `INSERT INTO submission (primary_student_email, app_id, sub_status)
        VALUES ("${requester}", "${app_id}", "${status}")`;

    connection.query(sql, function (error, results, fields) {
        console.log("creating submission");
        if (error) throw error;
        let newSubID = results.insertId;

        // Create a new request
        let sql2 = `INSERT INTO request (requester_email, requestee_email, submission_id, request_status)
            VALUES ("${requester}", "${requestee}", ${newSubID}, "pending");`;

        connection.query(sql2, function (error, results, fields) {
            console.log("creating req");
            if (error) throw error;
            res.send("Success...?");
        });
    });
}

app.post("/submission3", function(req,res){
    let requester = req.body.requester; // email
    let requestees = req.body.requestee; // arr of emails
    let app_id = req.body.app_id; // app id
    let room = req.body.room;
    let room_preference = req.body.room_preference;

    console.log(requester, requestees, app_id, room, room_preference);

    everySubmission(requester, requestees, app_id, room, room_preference, res);
});



function everySubmission(requester, requestees, app_id, room, room_preference, res) {
    // A funciton that should work to do submissions of all types!


    //let status = "pending";
    // Create a new submission
    let sql = `INSERT INTO submission (primary_student_email, app_id, sub_status, room, room_preference)
        VALUES ("${requester}", "${app_id}", "pending", "${room}", "${room_preference}")`;

    connection.query(sql, function (error, results, fields) {
        console.log("creating submission");
        if (error) throw error;
        let newSubID = results.insertId;

        for (let i = 0; i < requestees.length; i++){
            // Create a new request
            let sql2 = `INSERT INTO request (requester_email, requestee_email, submission_id, request_status)
                VALUES ("${requester}", "${requestees[i]}", ${newSubID}, "pending");`;

            connection.query(sql2, function (error, results, fields) {
                console.log("creating requests");
                if (error) throw error;
            });
        }

        res.send("Success...?");

    });
}


app.post("/mySubmissions", function (req,res){
    const sql = "SELECT * FROM submission WHERE primary_student_email = " 
    + connection.escape(req.body.myEmail); 
    dbQuery(req,res,sql);
})

app.post("/updateRequest", function(req,res){
    let id = connection.escape(req.body.requestID);
    let status = connection.escape(req.body.status);
    const sql = `UPDATE request SET request_status = "${status}" WHERE request_id = ${id}`;
    dbQuery(req,res,sql);
})