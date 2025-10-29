/*
* Title: Uptime Monitoring Api
* Description: 
* Author: Rashidul Islam
* Date: 29/10/2025
*/

// Dependencies
const http = require('http');
const url = require('url');

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
        console.log(`This app run on port ${app.config.port}`)
    });
};

//handle request, response 
app.handleReqRes= (req, res)=>{

    //handle request
    //parse url
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimePath = path.replace(/^\/+|\/+$/g, '');

    //response handle
    res.end('Hello Programmer. This is your own server for this project');
};

app.createServer();


