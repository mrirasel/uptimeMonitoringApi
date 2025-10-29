/*
* Title: Uptime Monitoring Api
* Description: 
* Author: Rashidul Islam
* Date: 29/10/2025
*/

// Dependencies
const http = require('http');

//app object -module scaffoldine
const app = {};

//configuration
app.config = {
    port:3000,
};
 

//create server
app.createServer = ()=>{
    const server =  http.createServer(app.handleReqRes);
    server.listen(app.config.port, ()=>{
        console.log(`app run on port ${app.config.port}`)
    });
};

//handle request, response 
app.handleReqRes= (req, res)=>{
    res.end('Hello Programmer');
};

app.createServer();


