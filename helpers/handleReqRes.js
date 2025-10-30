/*
* Title: Uptime Monitoring Api
* Description: 
* Author: Rashidul Islam
* Date: 30/10/2025
*/

// Dependencies
const url = require('url');
const {StringDecoder} =  require('string_decoder');
const routes = require('../routes');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHandler');

//app object -module scaffoldine
const handler = {};

handler.handleReqRes= (req, res)=>{

    //handle request
    //parse url
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimePath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parseUrl,
        path,
        trimePath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = ''

    const chosenHandler = routes[trimePath] ? routes[trimePath] : notFoundHandler;

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        // return the final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data',(buffer)=>{
        realData.write(buffer);
    })

    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);
        // response handle
        res.end('Hello world');
    });
};

module.exports = handler;