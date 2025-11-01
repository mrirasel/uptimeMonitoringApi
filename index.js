/*
* Title: Uptime Monitoring Api
* Description: 
* Author: Rashidul Islam
* Date: 29/10/2025
*/

// Dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
//console.log(environment);

//app object -module scaffoldine
const app = {};


//create server
app.createServer = ()=>{
    const server =  http.createServer(app.handleReqRes);
    server.listen(environment.port, ()=>{
       // console.log(`environment variable is ${process.env.NODE_ENV}`);
        console.log(`This app run on port ${environment.port}`);
    });
};

//handle request, response 
app.handleReqRes = handleReqRes;


app.createServer();


